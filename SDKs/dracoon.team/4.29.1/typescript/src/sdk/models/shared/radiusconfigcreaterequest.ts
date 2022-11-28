import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailoverServer } from "./failoverserver";



// RadiusConfigCreateRequest
/** 
 * Request model for creating a RADIUS configuration
**/
export class RadiusConfigCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failoverServer" })
  failoverServer?: FailoverServer;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=otpPinFirst" })
  otpPinFirst?: boolean;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=sharedSecret" })
  sharedSecret: string;
}
