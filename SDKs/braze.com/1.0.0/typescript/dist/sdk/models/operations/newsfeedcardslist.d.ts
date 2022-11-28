import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewsFeedCardsListQueryParams extends SpeakeasyBase {
    includeArchived?: string;
    page?: string;
    sortDirection?: string;
}
export declare class NewsFeedCardsListRequest extends SpeakeasyBase {
    queryParams: NewsFeedCardsListQueryParams;
}
export declare class NewsFeedCardsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
