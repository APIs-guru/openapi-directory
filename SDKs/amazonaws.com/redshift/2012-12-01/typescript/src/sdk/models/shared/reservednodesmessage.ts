import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";



// ReservedNodesMessage
/** 
 * <p/>
**/
export class ReservedNodesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNode })
  reservedNodes?: ReservedNode[];
}
