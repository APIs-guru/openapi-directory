import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Score } from "./googlecloudapigeev1score";



// GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
/** 
 * Response for ComputeEnvironmentScores.
**/
export class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scores", elemType: GoogleCloudApigeeV1Score })
  scores?: GoogleCloudApigeeV1Score[];
}
