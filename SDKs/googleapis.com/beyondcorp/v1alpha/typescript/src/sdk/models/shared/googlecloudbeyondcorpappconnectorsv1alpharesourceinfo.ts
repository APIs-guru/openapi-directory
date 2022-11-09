import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";

export enum GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    Unresponsive = "UNRESPONSIVE"
,    Degraded = "DEGRADED"
}


// GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo
/** 
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum;

  @Metadata({ data: "json, name=sub", elemType: shared.GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo })
  sub?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo[];

  @Metadata({ data: "json, name=time" })
  time?: string;
}
