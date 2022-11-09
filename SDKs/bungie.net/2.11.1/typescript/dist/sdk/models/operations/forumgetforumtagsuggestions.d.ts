import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetForumTagSuggestionsQueryParams extends SpeakeasyBase {
    partialtag?: string;
}
export declare class ForumGetForumTagSuggestionsRequest extends SpeakeasyBase {
    queryParams: ForumGetForumTagSuggestionsQueryParams;
}
export declare class ForumGetForumTagSuggestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
