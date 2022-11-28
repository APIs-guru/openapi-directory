import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter } from "./googlecloudapigeev1computeenvironmentscoresrequestfilter";
import { GoogleTypeInterval } from "./googletypeinterval";
/**
 * Request for ComputeEnvironmentScores.
**/
export declare class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest extends SpeakeasyBase {
    filters?: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter[];
    pageSize?: number;
    pageToken?: string;
    timeRange?: GoogleTypeInterval;
}
