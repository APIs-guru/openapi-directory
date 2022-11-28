import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueWithServiceIds } from "./valuewithserviceids";
import { AvailabilityZoneDetail } from "./availabilityzonedetail";
import { ServiceId } from "./serviceid";
import { ErrorRootCause } from "./errorrootcause";
import { FaultRootCause } from "./faultrootcause";
import { Http } from "./http";
import { InstanceIdDetail } from "./instanceiddetail";
import { ResourceArnDetail } from "./resourcearndetail";
import { ResponseTimeRootCause } from "./responsetimerootcause";
import { TraceUser } from "./traceuser";



// TraceSummary
/** 
 * Metadata generated from the segment documents in a trace.
**/
export class TraceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Annotations", elemType: ValueWithServiceIds, elemDepth: 2 })
  annotations?: Map<string, ValueWithServiceIds[]>;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones", elemType: AvailabilityZoneDetail })
  availabilityZones?: AvailabilityZoneDetail[];

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=EntryPoint" })
  entryPoint?: ServiceId;

  @SpeakeasyMetadata({ data: "json, name=ErrorRootCauses", elemType: ErrorRootCause })
  errorRootCauses?: ErrorRootCause[];

  @SpeakeasyMetadata({ data: "json, name=FaultRootCauses", elemType: FaultRootCause })
  faultRootCauses?: FaultRootCause[];

  @SpeakeasyMetadata({ data: "json, name=HasError" })
  hasError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasFault" })
  hasFault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasThrottle" })
  hasThrottle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Http" })
  http?: Http;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds", elemType: InstanceIdDetail })
  instanceIds?: InstanceIdDetail[];

  @SpeakeasyMetadata({ data: "json, name=IsPartial" })
  isPartial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MatchedEventTime" })
  matchedEventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceARNs", elemType: ResourceArnDetail })
  resourceArNs?: ResourceArnDetail[];

  @SpeakeasyMetadata({ data: "json, name=ResponseTime" })
  responseTime?: number;

  @SpeakeasyMetadata({ data: "json, name=ResponseTimeRootCauses", elemType: ResponseTimeRootCause })
  responseTimeRootCauses?: ResponseTimeRootCause[];

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceIds", elemType: ServiceId })
  serviceIds?: ServiceId[];

  @SpeakeasyMetadata({ data: "json, name=Users", elemType: TraceUser })
  users?: TraceUser[];
}
