import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClaimDeviceResponse
/** 
 * Response message containing device id of the claim.
**/
export class ClaimDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;
}
