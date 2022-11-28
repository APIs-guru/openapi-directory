import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcrDestination
/** 
 * The GCR location where the image must be pushed to.
**/
export class GcrDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
