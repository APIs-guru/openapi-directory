import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceInfo } from "./resourceinfo";

export enum ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    Unresponsive = "UNRESPONSIVE"
,    Degraded = "DEGRADED"
}


// ResourceInfo
/** 
 * ResourceInfo represents the information/status of the associated resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: ResourceInfoStatusEnum;

  @Metadata({ data: "json, name=sub", elemType: shared.ResourceInfo })
  sub?: ResourceInfo[];

  @Metadata({ data: "json, name=time" })
  time?: string;
}
