import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyGroup } from "./propertygroup";


// EnvironmentPropertyUpdates
/** 
 * Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export class EnvironmentPropertyUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyGroups", elemType: shared.PropertyGroup })
  propertyGroups: PropertyGroup[];
}
