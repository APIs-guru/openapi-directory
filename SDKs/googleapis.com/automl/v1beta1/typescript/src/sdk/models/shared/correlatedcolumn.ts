import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CorrelationStats } from "./correlationstats";


// CorrelatedColumn
/** 
 * Identifies the table's column, and its correlation with the column this ColumnSpec describes.
**/
export class CorrelatedColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnSpecId" })
  columnSpecId?: string;

  @Metadata({ data: "json, name=correlationStats" })
  correlationStats?: CorrelationStats;
}
