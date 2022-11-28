import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyGroup } from "./propertygroup";



// EnvironmentPropertyDescriptions
/** 
 * Describes the execution properties for an Apache Flink runtime.
**/
export class EnvironmentPropertyDescriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyGroupDescriptions", elemType: PropertyGroup })
  propertyGroupDescriptions?: PropertyGroup[];
}
