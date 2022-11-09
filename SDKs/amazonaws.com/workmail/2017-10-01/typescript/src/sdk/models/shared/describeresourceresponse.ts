import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BookingOptions } from "./bookingoptions";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class DescribeResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BookingOptions" })
  bookingOptions?: BookingOptions;

  @Metadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ResourceTypeEnum;
}
