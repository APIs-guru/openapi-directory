import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VariableSet } from "./variableset";


// ConfigurationVariables
/** 
 * A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
**/
export class ConfigurationVariables extends SpeakeasyBase {
  @Metadata({ data: "json, name=mcmId" })
  mcmId?: string;

  @Metadata({ data: "json, name=variableSet", elemType: shared.VariableSet })
  variableSet?: VariableSet[];
}
