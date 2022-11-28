import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PauseClusterMessage
/** 
 * Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. 
**/
export class PauseClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier: string;
}
