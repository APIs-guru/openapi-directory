import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyGroup } from "./propertygroup";


// EnvironmentProperties
/** 
 * Describes execution properties for a Flink-based Kinesis Data Analytics application.
**/
export class EnvironmentProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyGroups", elemType: shared.PropertyGroup })
  propertyGroups: PropertyGroup[];
}
