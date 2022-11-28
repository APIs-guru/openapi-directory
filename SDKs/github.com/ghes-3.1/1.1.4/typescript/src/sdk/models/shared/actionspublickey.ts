import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionsPublicKey
/** 
 * The public key used for setting Actions Secrets.
**/
export class ActionsPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
