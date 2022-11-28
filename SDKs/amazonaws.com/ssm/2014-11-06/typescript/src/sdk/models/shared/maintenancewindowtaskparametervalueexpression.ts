import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceWindowTaskParameterValueExpression
/** 
 * Defines the values for a task parameter.
**/
export class MaintenanceWindowTaskParameterValueExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
