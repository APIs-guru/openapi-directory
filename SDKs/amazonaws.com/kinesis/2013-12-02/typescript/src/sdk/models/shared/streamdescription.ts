import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";



// StreamDescription
/** 
 * Represents the output for <a>DescribeStream</a>.
**/
export class StreamDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EnhancedMonitoring", elemType: EnhancedMetrics })
  enhancedMonitoring: EnhancedMetrics[];

  @SpeakeasyMetadata({ data: "json, name=HasMoreShards" })
  hasMoreShards: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @SpeakeasyMetadata({ data: "json, name=Shards", elemType: Shard })
  shards: Shard[];

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn: string;

  @SpeakeasyMetadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=StreamStatus" })
  streamStatus: StreamStatusEnum;
}
