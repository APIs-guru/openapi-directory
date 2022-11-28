import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal
/** 
 * Column or key value pair from the request as part of key to use in query or a single pair of the fetch response.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filterAlias" })
  filterAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
