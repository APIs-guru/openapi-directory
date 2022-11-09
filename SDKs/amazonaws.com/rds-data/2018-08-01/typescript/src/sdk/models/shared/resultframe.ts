import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Record } from "./record";
import { ResultSetMetadata } from "./resultsetmetadata";


// ResultFrame
/** 
 * The result set returned by a SQL statement.
**/
export class ResultFrame extends SpeakeasyBase {
  @Metadata({ data: "json, name=records", elemType: shared.Record })
  records?: Record[];

  @Metadata({ data: "json, name=resultSetMetadata" })
  resultSetMetadata?: ResultSetMetadata;
}
