import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkPathComponentDetails } from "./networkpathcomponentdetails";
import { NetworkPathComponentDetails } from "./networkpathcomponentdetails";


// NetworkHeader
/** 
 * Details about a network path component that occurs before or after the current component.
**/
export class NetworkHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination?: NetworkPathComponentDetails;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=Source" })
  source?: NetworkPathComponentDetails;
}
