import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BookingOptions } from "./bookingoptions";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class DescribeResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BookingOptions" })
  bookingOptions?: BookingOptions;

  @SpeakeasyMetadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ResourceTypeEnum;
}
