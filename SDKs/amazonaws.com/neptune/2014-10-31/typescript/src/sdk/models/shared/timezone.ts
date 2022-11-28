import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timezone
/** 
 * A time zone associated with a <a>DBInstance</a>.
**/
export class Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  timezoneName?: string;
}
