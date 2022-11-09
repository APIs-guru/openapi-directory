import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExternalAccountIdentifiers
/** 
 * User account identifier in the third-party service.
**/
export class ExternalAccountIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @Metadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @Metadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;
}
