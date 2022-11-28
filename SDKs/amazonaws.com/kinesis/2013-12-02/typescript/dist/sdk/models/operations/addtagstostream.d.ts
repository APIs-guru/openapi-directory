import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddTagsToStreamXAmzTargetEnum {
    Kinesis20131202AddTagsToStream = "Kinesis_20131202.AddTagsToStream"
}
export declare class AddTagsToStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToStreamXAmzTargetEnum;
}
export declare class AddTagsToStreamRequest extends SpeakeasyBase {
    headers: AddTagsToStreamHeaders;
    request: shared.AddTagsToStreamInput;
}
export declare class AddTagsToStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
