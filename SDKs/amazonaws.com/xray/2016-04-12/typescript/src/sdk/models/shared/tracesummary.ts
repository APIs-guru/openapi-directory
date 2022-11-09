import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueWithServiceIds } from "./valuewithserviceids";
import { AvailabilityZoneDetail } from "./availabilityzonedetail";
import { ServiceId } from "./serviceid";
import { ErrorRootCause } from "./errorrootcause";
import { FaultRootCause } from "./faultrootcause";
import { Http } from "./http";
import { InstanceIdDetail } from "./instanceiddetail";
import { ResourceArnDetail } from "./resourcearndetail";
import { ResponseTimeRootCause } from "./responsetimerootcause";
import { ServiceId } from "./serviceid";
import { TraceUser } from "./traceuser";


// TraceSummary
/** 
 * Metadata generated from the segment documents in a trace.
**/
export class TraceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Annotations", elemType: shared.ValueWithServiceIds, elemDepth: 2 })
  annotations?: Map<string, ValueWithServiceIds[]>;

  @Metadata({ data: "json, name=AvailabilityZones", elemType: shared.AvailabilityZoneDetail })
  availabilityZones?: AvailabilityZoneDetail[];

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=EntryPoint" })
  entryPoint?: ServiceId;

  @Metadata({ data: "json, name=ErrorRootCauses", elemType: shared.ErrorRootCause })
  errorRootCauses?: ErrorRootCause[];

  @Metadata({ data: "json, name=FaultRootCauses", elemType: shared.FaultRootCause })
  faultRootCauses?: FaultRootCause[];

  @Metadata({ data: "json, name=HasError" })
  hasError?: boolean;

  @Metadata({ data: "json, name=HasFault" })
  hasFault?: boolean;

  @Metadata({ data: "json, name=HasThrottle" })
  hasThrottle?: boolean;

  @Metadata({ data: "json, name=Http" })
  http?: Http;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceIds", elemType: shared.InstanceIdDetail })
  instanceIds?: InstanceIdDetail[];

  @Metadata({ data: "json, name=IsPartial" })
  isPartial?: boolean;

  @Metadata({ data: "json, name=MatchedEventTime" })
  matchedEventTime?: Date;

  @Metadata({ data: "json, name=ResourceARNs", elemType: shared.ResourceArnDetail })
  resourceArNs?: ResourceArnDetail[];

  @Metadata({ data: "json, name=ResponseTime" })
  responseTime?: number;

  @Metadata({ data: "json, name=ResponseTimeRootCauses", elemType: shared.ResponseTimeRootCause })
  responseTimeRootCauses?: ResponseTimeRootCause[];

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=ServiceIds", elemType: shared.ServiceId })
  serviceIds?: ServiceId[];

  @Metadata({ data: "json, name=Users", elemType: shared.TraceUser })
  users?: TraceUser[];
}
