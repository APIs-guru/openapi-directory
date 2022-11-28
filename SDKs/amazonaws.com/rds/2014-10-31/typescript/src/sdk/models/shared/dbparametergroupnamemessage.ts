import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbParameterGroupNameMessage
/** 
 *  Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action. 
**/
export class DbParameterGroupNameMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupName?: string;
}
