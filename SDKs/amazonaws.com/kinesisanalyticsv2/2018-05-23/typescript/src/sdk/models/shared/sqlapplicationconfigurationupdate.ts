import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";


// SqlApplicationConfigurationUpdate
/** 
 * Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputUpdates", elemType: shared.InputUpdate })
  inputUpdates?: InputUpdate[];

  @Metadata({ data: "json, name=OutputUpdates", elemType: shared.OutputUpdate })
  outputUpdates?: OutputUpdate[];

  @Metadata({ data: "json, name=ReferenceDataSourceUpdates", elemType: shared.ReferenceDataSourceUpdate })
  referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
