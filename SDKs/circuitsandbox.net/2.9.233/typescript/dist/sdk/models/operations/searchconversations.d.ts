import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchConversationsScopeEnum {
    Files = "FILES",
    People = "PEOPLE",
    Members = "MEMBERS",
    Messages = "MESSAGES",
    Sentby = "SENTBY",
    All = "ALL",
    Conversations = "CONVERSATIONS",
    Label = "LABEL",
    Filter = "FILTER"
}
export declare class SearchConversationsQueryParams extends SpeakeasyBase {
    includeItemIds?: boolean;
    scope?: SearchConversationsScopeEnum;
    term: string;
}
export declare class SearchConversationsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SearchConversationsRequest extends SpeakeasyBase {
    queryParams: SearchConversationsQueryParams;
    security: SearchConversationsSecurity;
}
export declare class SearchConversationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationSearchResult?: any;
    statusCode: number;
}
