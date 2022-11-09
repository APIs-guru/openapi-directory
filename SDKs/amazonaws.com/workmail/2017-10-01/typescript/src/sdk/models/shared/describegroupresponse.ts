import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";


export class DescribeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EntityStateEnum;
}
