import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;
}
