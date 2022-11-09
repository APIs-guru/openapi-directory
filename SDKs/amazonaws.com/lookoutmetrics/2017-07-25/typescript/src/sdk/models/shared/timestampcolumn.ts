import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class TimestampColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;
}
