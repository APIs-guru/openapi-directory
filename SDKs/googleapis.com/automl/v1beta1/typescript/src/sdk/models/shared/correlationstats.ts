import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CorrelationStats
/** 
 * A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
**/
export class CorrelationStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cramersV" })
  cramersV?: number;
}
