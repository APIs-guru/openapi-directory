import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContentProviderEndpoint
/** 
 * This feature is not generally available.
**/
export class ContentProviderEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=signingCertsSha256" })
  signingCertsSha256?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
