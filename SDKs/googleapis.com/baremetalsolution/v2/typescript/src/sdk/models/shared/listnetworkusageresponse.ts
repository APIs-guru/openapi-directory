import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkUsage } from "./networkusage";



// ListNetworkUsageResponse
/** 
 * Response with Networks with IPs
**/
export class ListNetworkUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkUsage })
  networks?: NetworkUsage[];
}
