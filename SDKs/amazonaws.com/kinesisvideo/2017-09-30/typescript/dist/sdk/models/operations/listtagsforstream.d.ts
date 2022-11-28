import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForStreamRequestBody extends SpeakeasyBase {
    nextToken?: string;
    streamArn?: string;
    streamName?: string;
}
export declare class ListTagsForStreamRequest extends SpeakeasyBase {
    headers: ListTagsForStreamHeaders;
    request: ListTagsForStreamRequestBody;
}
export declare class ListTagsForStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidResourceFormatException?: any;
    listTagsForStreamOutput?: shared.ListTagsForStreamOutput;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
