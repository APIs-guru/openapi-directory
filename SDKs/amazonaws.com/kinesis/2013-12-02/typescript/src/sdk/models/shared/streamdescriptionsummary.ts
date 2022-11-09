import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { StreamStatusEnum } from "./streamstatusenum";


// StreamDescriptionSummary
/** 
 * Represents the output for <a>DescribeStreamSummary</a> 
**/
export class StreamDescriptionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerCount" })
  consumerCount?: number;

  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=EnhancedMonitoring", elemType: shared.EnhancedMetrics })
  enhancedMonitoring: EnhancedMetrics[];

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=OpenShardCount" })
  openShardCount: number;

  @Metadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;

  @Metadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp: Date;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=StreamStatus" })
  streamStatus: StreamStatusEnum;
}
