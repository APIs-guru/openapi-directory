import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharowfieldval";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow
/** 
 * Row of the fetch response consisting of a set of entries.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldValues", elemType: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal })
  fieldValues?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal[];
}
