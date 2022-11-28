import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendation } from "./googlecloudapigeev1scorecomponentrecommendation";



// GoogleCloudApigeeV1ScoreComponent
/** 
 * Component is an individual security element that is scored.
**/
export class GoogleCloudApigeeV1ScoreComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calculateTime" })
  calculateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCaptureTime" })
  dataCaptureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=drilldownPaths" })
  drilldownPaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: GoogleCloudApigeeV1ScoreComponentRecommendation })
  recommendations?: GoogleCloudApigeeV1ScoreComponentRecommendation[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=scorePath" })
  scorePath?: string;
}
