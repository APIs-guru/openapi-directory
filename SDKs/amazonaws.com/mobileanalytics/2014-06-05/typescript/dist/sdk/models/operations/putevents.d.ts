import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzClientContext: string;
    xAmzClientContextEncoding?: string;
}
export declare class PutEventsRequestBody extends SpeakeasyBase {
    events: shared.Event[];
}
export declare class PutEventsRequest extends SpeakeasyBase {
    headers: PutEventsHeaders;
    request: PutEventsRequestBody;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    statusCode: number;
}
