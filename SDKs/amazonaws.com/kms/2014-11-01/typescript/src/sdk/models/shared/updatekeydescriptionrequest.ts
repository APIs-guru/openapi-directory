import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateKeyDescriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
