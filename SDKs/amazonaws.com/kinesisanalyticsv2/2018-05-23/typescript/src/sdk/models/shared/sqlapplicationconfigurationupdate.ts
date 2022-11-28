import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";



// SqlApplicationConfigurationUpdate
/** 
 * Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputUpdates", elemType: InputUpdate })
  inputUpdates?: InputUpdate[];

  @SpeakeasyMetadata({ data: "json, name=OutputUpdates", elemType: OutputUpdate })
  outputUpdates?: OutputUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSourceUpdates", elemType: ReferenceDataSourceUpdate })
  referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
