import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddSshKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}
