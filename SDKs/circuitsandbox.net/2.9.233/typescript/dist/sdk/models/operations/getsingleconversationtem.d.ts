import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSingleConversationtemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSingleConversationtemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSingleConversationtemRequest extends SpeakeasyBase {
    pathParams: GetSingleConversationtemPathParams;
    security: GetSingleConversationtemSecurity;
}
export declare class GetSingleConversationtemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItem?: any;
    statusCode: number;
}
