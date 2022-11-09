import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkUsage } from "./networkusage";


// ListNetworkUsageResponse
/** 
 * Response with Networks with IPs
**/
export class ListNetworkUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=networks", elemType: shared.NetworkUsage })
  networks?: NetworkUsage[];
}
