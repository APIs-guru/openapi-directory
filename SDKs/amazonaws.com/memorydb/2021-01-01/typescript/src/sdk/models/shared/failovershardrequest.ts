import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FailoverShardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=ShardName" })
  shardName: string;
}
