import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicKeyEntity
/** 
 * List Public Keys
**/
export class PublicKeyEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
