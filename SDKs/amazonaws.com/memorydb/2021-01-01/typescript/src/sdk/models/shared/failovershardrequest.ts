import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FailoverShardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=ShardName" })
  shardName: string;
}
