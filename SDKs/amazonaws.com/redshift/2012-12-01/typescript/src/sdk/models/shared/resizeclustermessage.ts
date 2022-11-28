import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResizeClusterMessage
/** 
 * Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. 
**/
export class ResizeClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classic?: boolean;

  @SpeakeasyMetadata()
  clusterIdentifier: string;

  @SpeakeasyMetadata()
  clusterType?: string;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;
}
