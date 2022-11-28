import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * A range of integer values.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata()
  from?: number;

  @SpeakeasyMetadata()
  step?: number;

  @SpeakeasyMetadata()
  to?: number;
}
