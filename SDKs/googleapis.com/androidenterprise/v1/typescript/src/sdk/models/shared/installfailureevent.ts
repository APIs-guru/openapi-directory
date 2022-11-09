import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InstallFailureEventFailureReasonEnum {
    Unknown = "unknown"
,    Timeout = "timeout"
}


// InstallFailureEvent
/** 
 * An event generated when an app installation failed on a device
**/
export class InstallFailureEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=failureDetails" })
  failureDetails?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: InstallFailureEventFailureReasonEnum;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
