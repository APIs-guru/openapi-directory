import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIpGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId: string;
}
