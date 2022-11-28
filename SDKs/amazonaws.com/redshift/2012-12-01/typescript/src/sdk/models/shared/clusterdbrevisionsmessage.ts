import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterDbRevision } from "./clusterdbrevision";



export class ClusterDbRevisionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterDbRevision })
  clusterDbRevisions?: ClusterDbRevision[];

  @SpeakeasyMetadata()
  marker?: string;
}
