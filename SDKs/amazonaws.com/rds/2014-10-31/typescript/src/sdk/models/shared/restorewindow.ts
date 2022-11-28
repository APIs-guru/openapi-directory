import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreWindow
/** 
 * Earliest and latest time an instance can be restored to:
**/
export class RestoreWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  earliestTime?: Date;

  @SpeakeasyMetadata()
  latestTime?: Date;
}
