import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateShardCountXAmzTargetEnum {
    Kinesis20131202UpdateShardCount = "Kinesis_20131202.UpdateShardCount"
}
export declare class UpdateShardCountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateShardCountXAmzTargetEnum;
}
export declare class UpdateShardCountRequest extends SpeakeasyBase {
    headers: UpdateShardCountHeaders;
    request: shared.UpdateShardCountInput;
}
export declare class UpdateShardCountResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateShardCountOutput?: shared.UpdateShardCountOutput;
}
