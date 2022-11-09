import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";


// StreamDescription
/** 
 * Represents the output for <a>DescribeStream</a>.
**/
export class StreamDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=EnhancedMonitoring", elemType: shared.EnhancedMetrics })
  enhancedMonitoring: EnhancedMetrics[];

  @Metadata({ data: "json, name=HasMoreShards" })
  hasMoreShards: boolean;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @Metadata({ data: "json, name=Shards", elemType: shared.Shard })
  shards: Shard[];

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;

  @Metadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp: Date;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=StreamStatus" })
  streamStatus: StreamStatusEnum;
}
