import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1KeystoreInput
/** 
 * Datastore for Certificates and Aliases.
**/
export class GoogleCloudApigeeV1KeystoreInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudApigeeV1Keystore
/** 
 * Datastore for Certificates and Aliases.
**/
export class GoogleCloudApigeeV1Keystore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
