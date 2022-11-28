import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorrelationStats } from "./correlationstats";



// CorrelatedColumn
/** 
 * Identifies the table's column, and its correlation with the column this ColumnSpec describes.
**/
export class CorrelatedColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSpecId" })
  columnSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationStats" })
  correlationStats?: CorrelationStats;
}
