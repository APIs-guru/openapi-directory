import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroup } from "./dbparametergroup";



// DbParameterGroupsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action. 
**/
export class DbParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbParameterGroup })
  dbParameterGroups?: DbParameterGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
