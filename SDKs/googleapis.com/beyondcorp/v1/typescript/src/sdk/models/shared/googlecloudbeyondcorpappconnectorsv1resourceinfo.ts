import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}


// GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo
/** 
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub", elemType: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo })
  sub?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
