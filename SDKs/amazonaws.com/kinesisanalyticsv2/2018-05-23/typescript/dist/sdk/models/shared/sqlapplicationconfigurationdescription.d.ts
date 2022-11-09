import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDescription } from "./inputdescription";
import { OutputDescription } from "./outputdescription";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";
/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export declare class SqlApplicationConfigurationDescription extends SpeakeasyBase {
    inputDescriptions?: InputDescription[];
    outputDescriptions?: OutputDescription[];
    referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
