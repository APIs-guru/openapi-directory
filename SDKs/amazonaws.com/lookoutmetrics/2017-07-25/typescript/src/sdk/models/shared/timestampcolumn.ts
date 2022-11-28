import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class TimestampColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;
}
