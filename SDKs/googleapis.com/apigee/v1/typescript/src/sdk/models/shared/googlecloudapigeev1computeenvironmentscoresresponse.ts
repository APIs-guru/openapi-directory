import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Score } from "./googlecloudapigeev1score";


// GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
/** 
 * Response for ComputeEnvironmentScores.
**/
export class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=scores", elemType: shared.GoogleCloudApigeeV1Score })
  scores?: GoogleCloudApigeeV1Score[];
}
