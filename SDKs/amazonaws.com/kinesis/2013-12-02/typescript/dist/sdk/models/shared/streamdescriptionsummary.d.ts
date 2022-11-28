import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { StreamStatusEnum } from "./streamstatusenum";
/**
 * Represents the output for <a>DescribeStreamSummary</a>
**/
export declare class StreamDescriptionSummary extends SpeakeasyBase {
    consumerCount?: number;
    encryptionType?: EncryptionTypeEnum;
    enhancedMonitoring: EnhancedMetrics[];
    keyId?: string;
    openShardCount: number;
    retentionPeriodHours: number;
    streamArn: string;
    streamCreationTimestamp: Date;
    streamName: string;
    streamStatus: StreamStatusEnum;
}
