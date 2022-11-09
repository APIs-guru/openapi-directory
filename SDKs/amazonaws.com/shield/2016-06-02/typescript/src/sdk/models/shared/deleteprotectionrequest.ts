import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionId" })
  protectionId: string;
}
