import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEventsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class PutEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies a batch of events to process.
**/
export declare class PutEventsRequestBodyEventsRequest extends SpeakeasyBase {
    batchItem?: Map<string, shared.EventsBatch>;
}
export declare class PutEventsRequestBody extends SpeakeasyBase {
    eventsRequest: PutEventsRequestBodyEventsRequest;
}
export declare class PutEventsRequest extends SpeakeasyBase {
    pathParams: PutEventsPathParams;
    headers: PutEventsHeaders;
    request: PutEventsRequestBody;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    putEventsResponse?: shared.PutEventsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
