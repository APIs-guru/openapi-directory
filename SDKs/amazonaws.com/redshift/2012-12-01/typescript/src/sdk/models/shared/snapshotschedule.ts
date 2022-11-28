import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterAssociatedToSchedule } from "./clusterassociatedtoschedule";
import { Tag } from "./tag";



// SnapshotSchedule
/** 
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
**/
export class SnapshotSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associatedClusterCount?: number;

  @SpeakeasyMetadata({ elemType: ClusterAssociatedToSchedule })
  associatedClusters?: ClusterAssociatedToSchedule[];

  @SpeakeasyMetadata()
  nextInvocations?: Date[];

  @SpeakeasyMetadata()
  scheduleDefinitions?: string[];

  @SpeakeasyMetadata()
  scheduleDescription?: string;

  @SpeakeasyMetadata()
  scheduleIdentifier?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
