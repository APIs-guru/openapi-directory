import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InstallFailureEventFailureReasonEnum {
    Unknown = "unknown",
    Timeout = "timeout"
}


// InstallFailureEvent
/** 
 * An event generated when an app installation failed on a device
**/
export class InstallFailureEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=failureDetails" })
  failureDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: InstallFailureEventFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
