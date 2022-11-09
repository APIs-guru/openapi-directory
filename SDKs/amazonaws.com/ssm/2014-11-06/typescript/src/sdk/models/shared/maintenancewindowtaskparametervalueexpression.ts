import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceWindowTaskParameterValueExpression
/** 
 * Defines the values for a task parameter.
**/
export class MaintenanceWindowTaskParameterValueExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
