import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkPathComponentDetails } from "./networkpathcomponentdetails";



// NetworkHeader
/** 
 * Details about a network path component that occurs before or after the current component.
**/
export class NetworkHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: NetworkPathComponentDetails;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: NetworkPathComponentDetails;
}
