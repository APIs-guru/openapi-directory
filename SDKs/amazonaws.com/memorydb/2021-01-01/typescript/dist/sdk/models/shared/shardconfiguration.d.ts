import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
**/
export declare class ShardConfiguration extends SpeakeasyBase {
    replicaCount?: number;
    slots?: string;
}
