import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommunityConversationsOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum GetCommunityConversationsSortEnum {
    Alphabetically = "ALPHABETICALLY"
,    RecentActivity = "RECENT_ACTIVITY"
,    Popularity = "POPULARITY"
}


export class GetCommunityConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeOwn" })
  includeOwn?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCommunityConversationsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCommunityConversationsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetCommunityConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetCommunityConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommunityConversationsQueryParams;

  @Metadata()
  security: GetCommunityConversationsSecurity;
}


export class GetCommunityConversationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversations?: any[];

  @Metadata()
  statusCode: number;
}
