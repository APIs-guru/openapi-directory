import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterNode
/** 
 * The identifier of a node in a cluster.
**/
export class ClusterNode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeRole?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata()
  publicIpAddress?: string;
}
