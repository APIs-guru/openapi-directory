import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Score } from "./googlecloudapigeev1score";
/**
 * Response for ComputeEnvironmentScores.
**/
export declare class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse extends SpeakeasyBase {
    nextPageToken?: string;
    scores?: GoogleCloudApigeeV1Score[];
}
