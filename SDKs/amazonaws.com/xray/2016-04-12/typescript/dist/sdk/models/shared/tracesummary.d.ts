import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Metadata generated from the segment documents in a trace.
**/
export declare class TraceSummary extends SpeakeasyBase {
    annotations?: Map<string, ValueWithServiceIds[]>;
    availabilityZones?: AvailabilityZoneDetail[];
    duration?: number;
    entryPoint?: ServiceId;
    errorRootCauses?: ErrorRootCause[];
    faultRootCauses?: FaultRootCause[];
    hasError?: boolean;
    hasFault?: boolean;
    hasThrottle?: boolean;
    http?: Http;
    id?: string;
    instanceIds?: InstanceIdDetail[];
    isPartial?: boolean;
    matchedEventTime?: Date;
    resourceArNs?: ResourceArnDetail[];
    responseTime?: number;
    responseTimeRootCauses?: ResponseTimeRootCause[];
    revision?: number;
    serviceIds?: ServiceId[];
    users?: TraceUser[];
}
