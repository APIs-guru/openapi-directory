import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}


// GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo
/** 
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub", elemType: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo })
  sub?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
