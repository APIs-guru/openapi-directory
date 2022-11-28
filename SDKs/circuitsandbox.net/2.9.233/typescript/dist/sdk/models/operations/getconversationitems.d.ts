import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationItemsPathParams extends SpeakeasyBase {
    convId: string;
}
export declare enum GetConversationItemsDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}
export declare class GetConversationItemsQueryParams extends SpeakeasyBase {
    direction?: GetConversationItemsDirectionEnum;
    modTime?: Date;
    results?: number;
}
export declare class GetConversationItemsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetConversationItemsRequest extends SpeakeasyBase {
    pathParams: GetConversationItemsPathParams;
    queryParams: GetConversationItemsQueryParams;
    security: GetConversationItemsSecurity;
}
export declare class GetConversationItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItems?: any[];
    statusCode: number;
}
