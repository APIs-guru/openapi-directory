import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter } from "./googlecloudapigeev1computeenvironmentscoresrequestfilter";
import { GoogleTypeInterval } from "./googletypeinterval";



// GoogleCloudApigeeV1ComputeEnvironmentScoresRequest
/** 
 * Request for ComputeEnvironmentScores.
**/
export class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter })
  filters?: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
