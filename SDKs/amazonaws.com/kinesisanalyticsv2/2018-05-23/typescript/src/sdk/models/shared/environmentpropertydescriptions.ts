import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyGroup } from "./propertygroup";


// EnvironmentPropertyDescriptions
/** 
 * Describes the execution properties for an Apache Flink runtime.
**/
export class EnvironmentPropertyDescriptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyGroupDescriptions", elemType: shared.PropertyGroup })
  propertyGroupDescriptions?: PropertyGroup[];
}
