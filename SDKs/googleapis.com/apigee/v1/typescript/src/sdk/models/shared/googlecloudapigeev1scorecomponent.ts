import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ScoreComponentRecommendation } from "./googlecloudapigeev1scorecomponentrecommendation";


// GoogleCloudApigeeV1ScoreComponent
/** 
 * Component is an individual security element that is scored.
**/
export class GoogleCloudApigeeV1ScoreComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=calculateTime" })
  calculateTime?: string;

  @Metadata({ data: "json, name=dataCaptureTime" })
  dataCaptureTime?: string;

  @Metadata({ data: "json, name=drilldownPaths" })
  drilldownPaths?: string[];

  @Metadata({ data: "json, name=recommendations", elemType: shared.GoogleCloudApigeeV1ScoreComponentRecommendation })
  recommendations?: GoogleCloudApigeeV1ScoreComponentRecommendation[];

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=scorePath" })
  scorePath?: string;
}
