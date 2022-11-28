import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPinnedConversationsPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class GetPinnedConversationsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetPinnedConversationsRequest extends SpeakeasyBase {
    pathParams: GetPinnedConversationsPathParams;
    security: GetPinnedConversationsSecurity;
}
export declare class GetPinnedConversationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pinnedTopics?: any[];
    statusCode: number;
}
