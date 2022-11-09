import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Keystore
/** 
 * Datastore for Certificates and Aliases.
**/
export class GoogleCloudApigeeV1Keystore extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
