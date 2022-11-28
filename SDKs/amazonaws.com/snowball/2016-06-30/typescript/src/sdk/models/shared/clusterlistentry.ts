import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";



// ClusterListEntry
/** 
 * Contains a cluster's state, a cluster's ID, and other important information.
**/
export class ClusterListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterState" })
  clusterState?: ClusterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
