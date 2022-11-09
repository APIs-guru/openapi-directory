import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext } from "./googlecloudapigeev1scorecomponentrecommendationactionactioncontext";


// GoogleCloudApigeeV1ScoreComponentRecommendationAction
/** 
 * Action to improve security score.
**/
export class GoogleCloudApigeeV1ScoreComponentRecommendationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionContext" })
  actionContext?: GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
