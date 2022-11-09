import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
/**
 * Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
**/
export declare class SqlRunConfiguration extends SpeakeasyBase {
    inputId: string;
    inputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
