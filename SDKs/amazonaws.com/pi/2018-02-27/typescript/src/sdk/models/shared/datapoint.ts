import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataPoint
/** 
 * A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
**/
export class DataPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
