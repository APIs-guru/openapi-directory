import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEventsRequestBody extends SpeakeasyBase {
    eventList: shared.Event[];
    sessionId: string;
    trackingId: string;
    userId?: string;
}
export declare class PutEventsRequest extends SpeakeasyBase {
    headers: PutEventsHeaders;
    request: PutEventsRequestBody;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
