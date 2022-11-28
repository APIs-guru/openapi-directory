import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



// NetworkPathComponentDetails
/** 
 * Information about the destination of the next component in the network path.
**/
export class NetworkPathComponentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string[];

  @SpeakeasyMetadata({ data: "json, name=PortRanges", elemType: PortRange })
  portRanges?: PortRange[];
}
