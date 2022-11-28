import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { StreamStatusEnum } from "./streamstatusenum";



// StreamDescriptionSummary
/** 
 * Represents the output for <a>DescribeStreamSummary</a> 
**/
export class StreamDescriptionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerCount" })
  consumerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EnhancedMonitoring", elemType: EnhancedMetrics })
  enhancedMonitoring: EnhancedMetrics[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenShardCount" })
  openShardCount: number;

  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn: string;

  @SpeakeasyMetadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=StreamStatus" })
  streamStatus: StreamStatusEnum;
}
