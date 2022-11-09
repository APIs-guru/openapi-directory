import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProtectionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;
}
