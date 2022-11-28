import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TrafficSplitShardByEnum {
    Unspecified = "UNSPECIFIED",
    Cookie = "COOKIE",
    Ip = "IP",
    Random = "RANDOM"
}


// TrafficSplit
/** 
 * Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
**/
export class TrafficSplit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocations" })
  allocations?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=shardBy" })
  shardBy?: TrafficSplitShardByEnum;
}
