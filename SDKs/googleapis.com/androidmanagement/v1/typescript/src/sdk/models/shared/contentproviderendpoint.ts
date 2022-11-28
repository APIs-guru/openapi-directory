import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentProviderEndpoint
/** 
 * This feature is not generally available.
**/
export class ContentProviderEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=signingCertsSha256" })
  signingCertsSha256?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
