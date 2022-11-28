import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}


// ResourceInfo
/** 
 * ResourceInfo represents the information/status of the associated resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceInfoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub", elemType: ResourceInfo })
  sub?: ResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
