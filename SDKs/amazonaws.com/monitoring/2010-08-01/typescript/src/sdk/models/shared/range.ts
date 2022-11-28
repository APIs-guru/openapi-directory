import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Specifies one range of days or times to exclude from use for training an anomaly detection model.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endTime: Date;

  @SpeakeasyMetadata()
  startTime: Date;
}
