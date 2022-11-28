import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";



// ResultSetMetadata
/** 
 * The metadata of the result set returned by a SQL statement.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=columnMetadata", elemType: ColumnMetadata })
  columnMetadata?: ColumnMetadata[];
}
