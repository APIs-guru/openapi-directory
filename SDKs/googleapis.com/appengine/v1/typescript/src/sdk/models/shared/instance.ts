import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InstanceAvailabilityEnum {
    Unspecified = "UNSPECIFIED",
    Resident = "RESIDENT",
    Dynamic = "DYNAMIC"
}

export enum InstanceVmLivenessEnum {
    LivenessStateUnspecified = "LIVENESS_STATE_UNSPECIFIED",
    Unknown = "UNKNOWN",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Draining = "DRAINING",
    Timeout = "TIMEOUT"
}


// Instance
/** 
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineRelease" })
  appEngineRelease?: string;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: InstanceAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=averageLatency" })
  averageLatency?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryUsage" })
  memoryUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=qps" })
  qps?: number;

  @SpeakeasyMetadata({ data: "json, name=requests" })
  requests?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vmDebugEnabled" })
  vmDebugEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=vmIp" })
  vmIp?: string;

  @SpeakeasyMetadata({ data: "json, name=vmLiveness" })
  vmLiveness?: InstanceVmLivenessEnum;

  @SpeakeasyMetadata({ data: "json, name=vmName" })
  vmName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmStatus" })
  vmStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=vmZoneName" })
  vmZoneName?: string;
}
