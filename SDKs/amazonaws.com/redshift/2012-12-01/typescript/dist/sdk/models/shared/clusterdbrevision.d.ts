import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionTarget } from "./revisiontarget";
/**
 * Describes a <code>ClusterDbRevision</code>.
**/
export declare class ClusterDbRevision extends SpeakeasyBase {
    clusterIdentifier?: string;
    currentDatabaseRevision?: string;
    databaseRevisionReleaseDate?: Date;
    revisionTargets?: RevisionTarget[];
}
