import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLimitsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpenShardCount" })
  openShardCount: number;

  @SpeakeasyMetadata({ data: "json, name=ShardLimit" })
  shardLimit: number;
}
