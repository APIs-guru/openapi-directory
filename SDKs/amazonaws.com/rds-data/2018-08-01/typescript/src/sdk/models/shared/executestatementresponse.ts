import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";
import { Field } from "./field";


// ExecuteStatementResponse
/** 
 * The response elements represent the output of a request to run a SQL statement against a database.
**/
export class ExecuteStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnMetadata", elemType: shared.ColumnMetadata })
  columnMetadata?: ColumnMetadata[];

  @Metadata({ data: "json, name=generatedFields", elemType: shared.Field })
  generatedFields?: Field[];

  @Metadata({ data: "json, name=numberOfRecordsUpdated" })
  numberOfRecordsUpdated?: number;

  @Metadata({ data: "json, name=records", elemType: shared.Field, elemDepth: 2 })
  records?: Field[][];
}
