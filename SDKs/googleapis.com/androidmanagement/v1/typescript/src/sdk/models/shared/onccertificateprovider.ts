import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentProviderEndpoint } from "./contentproviderendpoint";


// OncCertificateProvider
/** 
 * This feature is not generally available.
**/
export class OncCertificateProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateReferences" })
  certificateReferences?: string[];

  @Metadata({ data: "json, name=contentProviderEndpoint" })
  contentProviderEndpoint?: ContentProviderEndpoint;
}
