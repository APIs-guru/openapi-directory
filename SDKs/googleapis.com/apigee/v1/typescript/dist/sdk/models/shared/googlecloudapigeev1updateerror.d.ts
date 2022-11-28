import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1UpdateErrorCodeEnum {
    Ok = "OK",
    Cancelled = "CANCELLED",
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    NotFound = "NOT_FOUND",
    AlreadyExists = "ALREADY_EXISTS",
    PermissionDenied = "PERMISSION_DENIED",
    Unauthenticated = "UNAUTHENTICATED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Aborted = "ABORTED",
    OutOfRange = "OUT_OF_RANGE",
    Unimplemented = "UNIMPLEMENTED",
    Internal = "INTERNAL",
    Unavailable = "UNAVAILABLE",
    DataLoss = "DATA_LOSS"
}
/**
 * Details on why a resource update failed in the runtime.
**/
export declare class GoogleCloudApigeeV1UpdateError extends SpeakeasyBase {
    code?: GoogleCloudApigeeV1UpdateErrorCodeEnum;
    message?: string;
    resource?: string;
    type?: string;
}
