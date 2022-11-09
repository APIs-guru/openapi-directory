import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDirectoryItemsJsonAscEnum {
    True = "true"
}

export enum GetDirectoryItemsJsonOrderEnum {
    LikesReceived = "likes_received"
,    LikesGiven = "likes_given"
,    TopicCount = "topic_count"
,    PostCount = "post_count"
,    TopicsEntered = "topics_entered"
,    PostsRead = "posts_read"
,    DaysVisited = "days_visited"
}

export enum GetDirectoryItemsJsonPeriodEnum {
    Daily = "daily"
,    Weekly = "weekly"
,    Monthly = "monthly"
,    Quarterly = "quarterly"
,    Yearly = "yearly"
,    All = "all"
}


export class GetDirectoryItemsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asc" })
  asc?: GetDirectoryItemsJsonAscEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order: GetDirectoryItemsJsonOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: GetDirectoryItemsJsonPeriodEnum;
}


export class GetDirectoryItemsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDirectoryItemsJsonQueryParams;
}


export class GetDirectoryItemsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDirectoryItemsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
