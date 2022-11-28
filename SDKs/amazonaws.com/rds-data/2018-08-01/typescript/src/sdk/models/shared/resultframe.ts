import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
import { ResultSetMetadata } from "./resultsetmetadata";



// ResultFrame
/** 
 * The result set returned by a SQL statement.
**/
export class ResultFrame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records", elemType: Record })
  records?: Record[];

  @SpeakeasyMetadata({ data: "json, name=resultSetMetadata" })
  resultSetMetadata?: ResultSetMetadata;
}
