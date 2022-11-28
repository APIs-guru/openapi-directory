import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromStreamXAmzTargetEnum {
    Kinesis20131202RemoveTagsFromStream = "Kinesis_20131202.RemoveTagsFromStream"
}
export declare class RemoveTagsFromStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromStreamXAmzTargetEnum;
}
export declare class RemoveTagsFromStreamRequest extends SpeakeasyBase {
    headers: RemoveTagsFromStreamHeaders;
    request: shared.RemoveTagsFromStreamInput;
}
export declare class RemoveTagsFromStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
