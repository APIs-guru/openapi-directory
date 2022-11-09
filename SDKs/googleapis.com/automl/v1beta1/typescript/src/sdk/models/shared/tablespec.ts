import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputConfig } from "./inputconfig";


// TableSpec
/** 
 * A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables
**/
export class TableSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnCount" })
  columnCount?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=inputConfigs", elemType: shared.InputConfig })
  inputConfigs?: InputConfig[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: string;

  @Metadata({ data: "json, name=timeColumnSpecId" })
  timeColumnSpecId?: string;

  @Metadata({ data: "json, name=validRowCount" })
  validRowCount?: string;
}
