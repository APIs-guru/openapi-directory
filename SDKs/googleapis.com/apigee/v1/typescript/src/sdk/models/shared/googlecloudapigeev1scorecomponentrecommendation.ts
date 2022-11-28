import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendationAction } from "./googlecloudapigeev1scorecomponentrecommendationaction";



// GoogleCloudApigeeV1ScoreComponentRecommendation
/** 
 * Recommendation based on security concerns and score.
**/
export class GoogleCloudApigeeV1ScoreComponentRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GoogleCloudApigeeV1ScoreComponentRecommendationAction })
  actions?: GoogleCloudApigeeV1ScoreComponentRecommendationAction[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
