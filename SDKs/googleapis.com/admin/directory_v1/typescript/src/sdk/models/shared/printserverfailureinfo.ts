import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrintServer } from "./printserver";

export enum PrintServerFailureInfoErrorCodeEnum {
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


// PrintServerFailureInfo
/** 
 * Info about failures
**/
export class PrintServerFailureInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: PrintServerFailureInfoErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=printServer" })
  printServer?: PrintServer;

  @Metadata({ data: "json, name=printServerId" })
  printServerId?: string;
}
