import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortRange } from "./portrange";


// NetworkPathComponentDetails
/** 
 * Information about the destination of the next component in the network path.
**/
export class NetworkPathComponentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string[];

  @Metadata({ data: "json, name=PortRanges", elemType: shared.PortRange })
  portRanges?: PortRange[];
}
