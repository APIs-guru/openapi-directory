import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterAssociatedToSchedule } from "./clusterassociatedtoschedule";
import { Tag } from "./tag";
/**
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.
**/
export declare class SnapshotSchedule extends SpeakeasyBase {
    associatedClusterCount?: number;
    associatedClusters?: ClusterAssociatedToSchedule[];
    nextInvocations?: Date[];
    scheduleDefinitions?: string[];
    scheduleDescription?: string;
    scheduleIdentifier?: string;
    tags?: Tag[];
}
