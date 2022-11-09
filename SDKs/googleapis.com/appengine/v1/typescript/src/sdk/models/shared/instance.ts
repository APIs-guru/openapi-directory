import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InstanceAvailabilityEnum {
    Unspecified = "UNSPECIFIED"
,    Resident = "RESIDENT"
,    Dynamic = "DYNAMIC"
}

export enum InstanceVmLivenessEnum {
    LivenessStateUnspecified = "LIVENESS_STATE_UNSPECIFIED"
,    Unknown = "UNKNOWN"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    Draining = "DRAINING"
,    Timeout = "TIMEOUT"
}


// Instance
/** 
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineRelease" })
  appEngineRelease?: string;

  @Metadata({ data: "json, name=availability" })
  availability?: InstanceAvailabilityEnum;

  @Metadata({ data: "json, name=averageLatency" })
  averageLatency?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=memoryUsage" })
  memoryUsage?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=qps" })
  qps?: number;

  @Metadata({ data: "json, name=requests" })
  requests?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=vmDebugEnabled" })
  vmDebugEnabled?: boolean;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;

  @Metadata({ data: "json, name=vmIp" })
  vmIp?: string;

  @Metadata({ data: "json, name=vmLiveness" })
  vmLiveness?: InstanceVmLivenessEnum;

  @Metadata({ data: "json, name=vmName" })
  vmName?: string;

  @Metadata({ data: "json, name=vmStatus" })
  vmStatus?: string;

  @Metadata({ data: "json, name=vmZoneName" })
  vmZoneName?: string;
}
