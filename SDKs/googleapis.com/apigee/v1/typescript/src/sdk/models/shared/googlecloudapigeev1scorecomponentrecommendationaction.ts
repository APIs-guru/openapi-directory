import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext } from "./googlecloudapigeev1scorecomponentrecommendationactionactioncontext";



// GoogleCloudApigeeV1ScoreComponentRecommendationAction
/** 
 * Action to improve security score.
**/
export class GoogleCloudApigeeV1ScoreComponentRecommendationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionContext" })
  actionContext?: GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
