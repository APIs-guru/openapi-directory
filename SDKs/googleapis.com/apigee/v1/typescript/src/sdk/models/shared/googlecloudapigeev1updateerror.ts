import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1UpdateErrorCodeEnum {
    Ok = "OK"
,    Cancelled = "CANCELLED"
,    Unknown = "UNKNOWN"
,    InvalidArgument = "INVALID_ARGUMENT"
,    DeadlineExceeded = "DEADLINE_EXCEEDED"
,    NotFound = "NOT_FOUND"
,    AlreadyExists = "ALREADY_EXISTS"
,    PermissionDenied = "PERMISSION_DENIED"
,    Unauthenticated = "UNAUTHENTICATED"
,    ResourceExhausted = "RESOURCE_EXHAUSTED"
,    FailedPrecondition = "FAILED_PRECONDITION"
,    Aborted = "ABORTED"
,    OutOfRange = "OUT_OF_RANGE"
,    Unimplemented = "UNIMPLEMENTED"
,    Internal = "INTERNAL"
,    Unavailable = "UNAVAILABLE"
,    DataLoss = "DATA_LOSS"
}


// GoogleCloudApigeeV1UpdateError
/** 
 * Details on why a resource update failed in the runtime.
**/
export class GoogleCloudApigeeV1UpdateError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: GoogleCloudApigeeV1UpdateErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
