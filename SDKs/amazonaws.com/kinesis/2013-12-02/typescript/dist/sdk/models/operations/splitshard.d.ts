import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SplitShardXAmzTargetEnum {
    Kinesis20131202SplitShard = "Kinesis_20131202.SplitShard"
}
export declare class SplitShardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SplitShardXAmzTargetEnum;
}
export declare class SplitShardRequest extends SpeakeasyBase {
    headers: SplitShardHeaders;
    request: shared.SplitShardInput;
}
export declare class SplitShardResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
