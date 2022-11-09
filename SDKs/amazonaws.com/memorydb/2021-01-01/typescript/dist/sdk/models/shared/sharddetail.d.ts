import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardConfiguration } from "./shardconfiguration";
/**
 * Provides details of a shard in a snapshot
**/
export declare class ShardDetail extends SpeakeasyBase {
    configuration?: ShardConfiguration;
    name?: string;
    size?: string;
    snapshotCreationTime?: Date;
}
