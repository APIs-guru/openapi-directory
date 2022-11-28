import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TrafficSplitShardByEnum {
    Unspecified = "UNSPECIFIED",
    Cookie = "COOKIE",
    Ip = "IP",
    Random = "RANDOM"
}
/**
 * Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
**/
export declare class TrafficSplit extends SpeakeasyBase {
    allocations?: Map<string, number>;
    shardBy?: TrafficSplitShardByEnum;
}
