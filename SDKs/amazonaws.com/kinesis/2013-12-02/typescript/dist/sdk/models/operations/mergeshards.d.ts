import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergeShardsXAmzTargetEnum {
    Kinesis20131202MergeShards = "Kinesis_20131202.MergeShards"
}
export declare class MergeShardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeShardsXAmzTargetEnum;
}
export declare class MergeShardsRequest extends SpeakeasyBase {
    headers: MergeShardsHeaders;
    request: shared.MergeShardsInput;
}
export declare class MergeShardsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
