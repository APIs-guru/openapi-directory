import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStateEnum } from "./clusterstateenum";


// ClusterListEntry
/** 
 * Contains a cluster's state, a cluster's ID, and other important information.
**/
export class ClusterListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=ClusterState" })
  clusterState?: ClusterStateEnum;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
