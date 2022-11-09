import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataStats } from "./datastats";
import { DataType } from "./datatype";
import { CorrelatedColumn } from "./correlatedcolumn";


// ColumnSpec
/** 
 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
**/
export class ColumnSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataStats" })
  dataStats?: DataStats;

  @Metadata({ data: "json, name=dataType" })
  dataType?: DataType;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topCorrelatedColumns", elemType: shared.CorrelatedColumn })
  topCorrelatedColumns?: CorrelatedColumn[];
}
