import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailoverServer } from "./failoverserver";


// RadiusConfigCreateRequest
/** 
 * Request model for creating a RADIUS configuration
**/
export class RadiusConfigCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=failoverServer" })
  failoverServer?: FailoverServer;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress: string;

  @Metadata({ data: "json, name=otpPinFirst" })
  otpPinFirst?: boolean;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=sharedSecret" })
  sharedSecret: string;
}
