import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Licensing
/** 
 * Configure Licensing.
**/
export class Licensing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osByol" })
  osByol?: boolean;
}
