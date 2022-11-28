import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}
