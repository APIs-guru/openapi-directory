import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";



// TableSpec
/** 
 * A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables
**/
export class TableSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnCount" })
  columnCount?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: InputConfig })
  inputConfigs?: InputConfig[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=timeColumnSpecId" })
  timeColumnSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=validRowCount" })
  validRowCount?: string;
}
