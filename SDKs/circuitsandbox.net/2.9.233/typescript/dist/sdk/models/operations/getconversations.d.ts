import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConversationsDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}
export declare class GetConversationsQueryParams extends SpeakeasyBase {
    direction?: GetConversationsDirectionEnum;
    modTime?: Date;
    results?: number;
}
export declare class GetConversationsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetConversationsRequest extends SpeakeasyBase {
    queryParams: GetConversationsQueryParams;
    security: GetConversationsSecurity;
}
export declare class GetConversationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversations?: any[];
    statusCode: number;
}
