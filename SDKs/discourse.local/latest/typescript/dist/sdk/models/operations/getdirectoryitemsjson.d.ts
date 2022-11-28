import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDirectoryItemsJsonAscEnum {
    True = "true"
}
export declare enum GetDirectoryItemsJsonOrderEnum {
    LikesReceived = "likes_received",
    LikesGiven = "likes_given",
    TopicCount = "topic_count",
    PostCount = "post_count",
    TopicsEntered = "topics_entered",
    PostsRead = "posts_read",
    DaysVisited = "days_visited"
}
export declare enum GetDirectoryItemsJsonPeriodEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly",
    All = "all"
}
export declare class GetDirectoryItemsJsonQueryParams extends SpeakeasyBase {
    asc?: GetDirectoryItemsJsonAscEnum;
    order: GetDirectoryItemsJsonOrderEnum;
    page?: number;
    period: GetDirectoryItemsJsonPeriodEnum;
}
export declare class GetDirectoryItemsJsonRequest extends SpeakeasyBase {
    queryParams: GetDirectoryItemsJsonQueryParams;
}
export declare class GetDirectoryItemsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getDirectoryItemsJson200ApplicationJsonAny?: any;
    statusCode: number;
}
