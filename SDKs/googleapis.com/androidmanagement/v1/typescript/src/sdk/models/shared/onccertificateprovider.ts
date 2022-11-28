import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentProviderEndpoint } from "./contentproviderendpoint";



// OncCertificateProvider
/** 
 * This feature is not generally available.
**/
export class OncCertificateProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateReferences" })
  certificateReferences?: string[];

  @SpeakeasyMetadata({ data: "json, name=contentProviderEndpoint" })
  contentProviderEndpoint?: ContentProviderEndpoint;
}
