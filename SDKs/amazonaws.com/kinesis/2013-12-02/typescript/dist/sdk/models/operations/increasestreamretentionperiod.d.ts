import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IncreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202IncreaseStreamRetentionPeriod = "Kinesis_20131202.IncreaseStreamRetentionPeriod"
}
export declare class IncreaseStreamRetentionPeriodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IncreaseStreamRetentionPeriodXAmzTargetEnum;
}
export declare class IncreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
    headers: IncreaseStreamRetentionPeriodHeaders;
    request: shared.IncreaseStreamRetentionPeriodInput;
}
export declare class IncreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
