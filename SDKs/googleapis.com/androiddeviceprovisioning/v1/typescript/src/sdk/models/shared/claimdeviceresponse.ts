import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClaimDeviceResponse
/** 
 * Response message containing device id of the claim.
**/
export class ClaimDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;
}
