import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DedicatedIp } from "./dedicatedip";



// GetDedicatedIpResponse
/** 
 * Information about a dedicated IP address.
**/
export class GetDedicatedIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedIp" })
  dedicatedIp?: DedicatedIp;
}
