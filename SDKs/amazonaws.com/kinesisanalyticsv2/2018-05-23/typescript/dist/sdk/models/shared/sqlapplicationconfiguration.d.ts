import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Input } from "./input";
import { Output } from "./output";
import { ReferenceDataSource } from "./referencedatasource";
/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export declare class SqlApplicationConfiguration extends SpeakeasyBase {
    inputs?: Input[];
    outputs?: Output[];
    referenceDataSources?: ReferenceDataSource[];
}
