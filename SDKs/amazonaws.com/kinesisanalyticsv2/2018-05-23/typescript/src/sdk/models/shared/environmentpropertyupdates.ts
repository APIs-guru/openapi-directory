import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyGroup } from "./propertygroup";



// EnvironmentPropertyUpdates
/** 
 * Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export class EnvironmentPropertyUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyGroups", elemType: PropertyGroup })
  propertyGroups: PropertyGroup[];
}
