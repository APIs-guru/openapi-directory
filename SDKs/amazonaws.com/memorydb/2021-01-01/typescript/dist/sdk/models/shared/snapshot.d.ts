import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
/**
 * Represents a copy of an entire cluster as of the time when the snapshot was taken.
**/
export declare class Snapshot extends SpeakeasyBase {
    arn?: string;
    clusterConfiguration?: ClusterConfiguration;
    kmsKeyId?: string;
    name?: string;
    source?: string;
    status?: string;
}
