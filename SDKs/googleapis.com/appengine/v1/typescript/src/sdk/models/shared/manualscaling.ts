import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManualScaling
/** 
 * A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
**/
export class ManualScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances" })
  instances?: number;
}
