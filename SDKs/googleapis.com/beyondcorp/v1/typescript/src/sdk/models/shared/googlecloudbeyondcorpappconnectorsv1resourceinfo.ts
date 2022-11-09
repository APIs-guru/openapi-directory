import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";

export enum GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    Unresponsive = "UNRESPONSIVE"
,    Degraded = "DEGRADED"
}


// GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo
/** 
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;

  @Metadata({ data: "json, name=sub", elemType: shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo })
  sub?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[];

  @Metadata({ data: "json, name=time" })
  time?: string;
}
