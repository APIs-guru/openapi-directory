import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DecreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202DecreaseStreamRetentionPeriod = "Kinesis_20131202.DecreaseStreamRetentionPeriod"
}
export declare class DecreaseStreamRetentionPeriodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecreaseStreamRetentionPeriodXAmzTargetEnum;
}
export declare class DecreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
    headers: DecreaseStreamRetentionPeriodHeaders;
    request: shared.DecreaseStreamRetentionPeriodInput;
}
export declare class DecreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
