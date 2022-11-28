import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyGroup } from "./propertygroup";



// EnvironmentProperties
/** 
 * Describes execution properties for a Flink-based Kinesis Data Analytics application.
**/
export class EnvironmentProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyGroups", elemType: PropertyGroup })
  propertyGroups: PropertyGroup[];
}
