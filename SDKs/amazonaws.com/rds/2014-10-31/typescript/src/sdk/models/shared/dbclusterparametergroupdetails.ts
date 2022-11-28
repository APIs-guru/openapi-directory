import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// DbClusterParameterGroupDetails
/** 
 * Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
**/
export class DbClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}
