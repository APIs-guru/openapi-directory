import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";



// ExecuteStatementResponse
/** 
 * The response elements represent the output of a request to run a SQL statement against a database.
**/
export class ExecuteStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnMetadata", elemType: ColumnMetadata })
  columnMetadata?: ColumnMetadata[];

  @SpeakeasyMetadata({ data: "json, name=generatedFields", elemType: Field })
  generatedFields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=numberOfRecordsUpdated" })
  numberOfRecordsUpdated?: number;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: Field, elemDepth: 2 })
  records?: Field[][];
}
