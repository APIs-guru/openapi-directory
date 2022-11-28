import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalAccountIdentifiers
/** 
 * User account identifier in the third-party service.
**/
export class ExternalAccountIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;
}
