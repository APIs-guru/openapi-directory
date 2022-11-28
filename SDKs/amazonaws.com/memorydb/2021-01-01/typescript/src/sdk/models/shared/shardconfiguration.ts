import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShardConfiguration
/** 
 * Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
**/
export class ShardConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicaCount" })
  replicaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Slots" })
  slots?: string;
}
