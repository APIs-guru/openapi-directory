import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Printer } from "./printer";


export enum FailureInfoErrorCodeEnum {
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


// FailureInfo
/** 
 * Info about failures
**/
export class FailureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: FailureInfoErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=printer" })
  printer?: Printer;

  @SpeakeasyMetadata({ data: "json, name=printerId" })
  printerId?: string;
}
