import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLimitsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpenShardCount" })
  openShardCount: number;

  @Metadata({ data: "json, name=ShardLimit" })
  shardLimit: number;
}
