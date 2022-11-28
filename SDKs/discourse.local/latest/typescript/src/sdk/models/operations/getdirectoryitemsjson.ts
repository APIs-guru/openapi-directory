import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDirectoryItemsJsonAscEnum {
    True = "true"
}

export enum GetDirectoryItemsJsonOrderEnum {
    LikesReceived = "likes_received",
    LikesGiven = "likes_given",
    TopicCount = "topic_count",
    PostCount = "post_count",
    TopicsEntered = "topics_entered",
    PostsRead = "posts_read",
    DaysVisited = "days_visited"
}

export enum GetDirectoryItemsJsonPeriodEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly",
    All = "all"
}


export class GetDirectoryItemsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asc" })
  asc?: GetDirectoryItemsJsonAscEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order: GetDirectoryItemsJsonOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetDirectoryItemsJsonPeriodEnum;
}


export class GetDirectoryItemsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDirectoryItemsJsonQueryParams;
}


export class GetDirectoryItemsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDirectoryItemsJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
