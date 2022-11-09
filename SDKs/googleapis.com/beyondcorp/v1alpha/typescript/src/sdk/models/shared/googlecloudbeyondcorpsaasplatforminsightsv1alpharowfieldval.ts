import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal
/** 
 * Column or key value pair from the request as part of key to use in query or a single pair of the fetch response.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filterAlias" })
  filterAlias?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
