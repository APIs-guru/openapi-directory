import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyEntity
/** 
 * List Public Keys
**/
export class PublicKeyEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
