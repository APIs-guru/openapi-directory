import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleRange
/** 
 * A range of double values.
**/
export class DoubleRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  from?: number;

  @SpeakeasyMetadata()
  to?: number;
}
