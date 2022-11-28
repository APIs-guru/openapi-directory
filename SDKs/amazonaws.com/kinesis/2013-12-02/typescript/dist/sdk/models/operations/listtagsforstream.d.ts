import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForStreamXAmzTargetEnum {
    Kinesis20131202ListTagsForStream = "Kinesis_20131202.ListTagsForStream"
}
export declare class ListTagsForStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForStreamXAmzTargetEnum;
}
export declare class ListTagsForStreamRequest extends SpeakeasyBase {
    headers: ListTagsForStreamHeaders;
    request: shared.ListTagsForStreamInput;
}
export declare class ListTagsForStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    listTagsForStreamOutput?: shared.ListTagsForStreamOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
