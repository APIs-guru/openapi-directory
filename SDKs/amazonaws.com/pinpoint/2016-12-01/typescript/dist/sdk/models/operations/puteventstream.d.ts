import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEventStreamPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class PutEventStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
**/
export declare class PutEventStreamRequestBodyWriteEventStream extends SpeakeasyBase {
    destinationStreamArn?: string;
    roleArn?: string;
}
export declare class PutEventStreamRequestBody extends SpeakeasyBase {
    writeEventStream: PutEventStreamRequestBodyWriteEventStream;
}
export declare class PutEventStreamRequest extends SpeakeasyBase {
    pathParams: PutEventStreamPathParams;
    headers: PutEventStreamHeaders;
    request: PutEventStreamRequestBody;
}
export declare class PutEventStreamResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    putEventStreamResponse?: shared.PutEventStreamResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
