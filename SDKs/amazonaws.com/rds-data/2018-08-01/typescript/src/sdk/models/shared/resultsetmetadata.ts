import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnMetadata } from "./columnmetadata";


// ResultSetMetadata
/** 
 * The metadata of the result set returned by a SQL statement.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @Metadata({ data: "json, name=columnMetadata", elemType: shared.ColumnMetadata })
  columnMetadata?: ColumnMetadata[];
}
