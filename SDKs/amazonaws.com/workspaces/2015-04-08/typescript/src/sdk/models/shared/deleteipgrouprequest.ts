import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIpGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;
}
