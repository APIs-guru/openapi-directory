import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";
import { DataType } from "./datatype";
import { CorrelatedColumn } from "./correlatedcolumn";



// ColumnSpec
/** 
 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
**/
export class ColumnSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataStats" })
  dataStats?: DataStats;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: DataType;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topCorrelatedColumns", elemType: CorrelatedColumn })
  topCorrelatedColumns?: CorrelatedColumn[];
}
