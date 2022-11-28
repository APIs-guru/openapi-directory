import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFavoriteConversationsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetFavoriteConversationsRequest extends SpeakeasyBase {
    security: GetFavoriteConversationsSecurity;
}
export declare class GetFavoriteConversationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
