import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharowfieldval";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow
/** 
 * Row of the fetch response consisting of a set of entries.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldValues", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal })
  fieldValues?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal[];
}
