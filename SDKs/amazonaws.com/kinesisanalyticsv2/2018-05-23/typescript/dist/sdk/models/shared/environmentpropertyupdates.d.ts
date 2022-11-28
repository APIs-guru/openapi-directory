import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyGroup } from "./propertygroup";
/**
 * Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export declare class EnvironmentPropertyUpdates extends SpeakeasyBase {
    propertyGroups: PropertyGroup[];
}
