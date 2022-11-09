import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionsPublicKey
/** 
 * The public key used for setting Actions Secrets.
**/
export class ActionsPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=key_id" })
  keyId: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
