import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";


export enum PrintServerFailureInfoErrorCodeEnum {
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


// PrintServerFailureInfo
/** 
 * Info about failures
**/
export class PrintServerFailureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: PrintServerFailureInfoErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=printServer" })
  printServer?: PrintServer;

  @SpeakeasyMetadata({ data: "json, name=printServerId" })
  printServerId?: string;
}
