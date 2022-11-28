import { SpeakeasyBase } from "../../../internal/utils";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";
/**
 * Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export declare class SqlApplicationConfigurationUpdate extends SpeakeasyBase {
    inputUpdates?: InputUpdate[];
    outputUpdates?: OutputUpdate[];
    referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
