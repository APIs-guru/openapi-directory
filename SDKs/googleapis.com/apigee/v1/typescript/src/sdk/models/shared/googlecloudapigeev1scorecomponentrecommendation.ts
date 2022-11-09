import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ScoreComponentRecommendationAction } from "./googlecloudapigeev1scorecomponentrecommendationaction";


// GoogleCloudApigeeV1ScoreComponentRecommendation
/** 
 * Recommendation based on security concerns and score.
**/
export class GoogleCloudApigeeV1ScoreComponentRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.GoogleCloudApigeeV1ScoreComponentRecommendationAction })
  actions?: GoogleCloudApigeeV1ScoreComponentRecommendationAction[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=impact" })
  impact?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
