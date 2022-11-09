import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter } from "./googlecloudapigeev1computeenvironmentscoresrequestfilter";
import { GoogleTypeInterval } from "./googletypeinterval";


// GoogleCloudApigeeV1ComputeEnvironmentScoresRequest
/** 
 * Request for ComputeEnvironmentScores.
**/
export class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter })
  filters?: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
