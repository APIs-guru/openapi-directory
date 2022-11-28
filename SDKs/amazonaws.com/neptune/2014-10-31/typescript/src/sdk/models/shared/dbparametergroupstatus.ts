import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbParameterGroupStatus
/** 
 * <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
**/
export class DbParameterGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;
}
