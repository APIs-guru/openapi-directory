import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionTarget } from "./revisiontarget";



// ClusterDbRevision
/** 
 * Describes a <code>ClusterDbRevision</code>.
**/
export class ClusterDbRevision extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  currentDatabaseRevision?: string;

  @SpeakeasyMetadata()
  databaseRevisionReleaseDate?: Date;

  @SpeakeasyMetadata({ elemType: RevisionTarget })
  revisionTargets?: RevisionTarget[];
}
