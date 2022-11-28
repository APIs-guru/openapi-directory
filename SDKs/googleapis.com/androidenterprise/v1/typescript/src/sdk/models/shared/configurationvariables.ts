import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariableSet } from "./variableset";



// ConfigurationVariables
/** 
 * A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
**/
export class ConfigurationVariables extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mcmId" })
  mcmId?: string;

  @SpeakeasyMetadata({ data: "json, name=variableSet", elemType: VariableSet })
  variableSet?: VariableSet[];
}
