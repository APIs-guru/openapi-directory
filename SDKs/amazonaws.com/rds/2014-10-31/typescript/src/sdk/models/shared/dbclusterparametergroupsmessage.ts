import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";



// DbClusterParameterGroupsMessage
/** 
 * <p/>
**/
export class DbClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterParameterGroup })
  dbClusterParameterGroups?: DbClusterParameterGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
