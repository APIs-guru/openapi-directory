import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";



export class DescribeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EntityStateEnum;
}
