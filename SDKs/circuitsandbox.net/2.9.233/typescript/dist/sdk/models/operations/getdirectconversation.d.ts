import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDirectConversationQueryParams extends SpeakeasyBase {
    participant: string;
}
export declare class GetDirectConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetDirectConversationRequest extends SpeakeasyBase {
    queryParams: GetDirectConversationQueryParams;
    security: GetDirectConversationSecurity;
}
export declare class GetDirectConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
