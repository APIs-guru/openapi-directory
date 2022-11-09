import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShardConfiguration
/** 
 * Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
**/
export class ShardConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicaCount" })
  replicaCount?: number;

  @Metadata({ data: "json, name=Slots" })
  slots?: string;
}
