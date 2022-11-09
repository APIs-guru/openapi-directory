import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataPoint
/** 
 * A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
**/
export class DataPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=Value" })
  value: number;
}
