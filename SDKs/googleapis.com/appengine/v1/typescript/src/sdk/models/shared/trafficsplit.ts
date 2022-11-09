import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TrafficSplitShardByEnum {
    Unspecified = "UNSPECIFIED"
,    Cookie = "COOKIE"
,    Ip = "IP"
,    Random = "RANDOM"
}


// TrafficSplit
/** 
 * Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
**/
export class TrafficSplit extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocations" })
  allocations?: Map<string, number>;

  @Metadata({ data: "json, name=shardBy" })
  shardBy?: TrafficSplitShardByEnum;
}
