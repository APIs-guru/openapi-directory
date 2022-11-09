import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DedicatedIp } from "./dedicatedip";


// GetDedicatedIpResponse
/** 
 * Information about a dedicated IP address.
**/
export class GetDedicatedIpResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedIp" })
  dedicatedIp?: DedicatedIp;
}
