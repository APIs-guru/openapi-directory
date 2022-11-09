import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProtectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionId" })
  protectionId?: string;
}
