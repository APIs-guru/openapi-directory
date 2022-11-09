import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcrDestination
/** 
 * The GCR location where the image must be pushed to.
**/
export class GcrDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
