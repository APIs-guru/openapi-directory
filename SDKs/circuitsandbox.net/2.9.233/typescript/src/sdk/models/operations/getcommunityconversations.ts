import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCommunityConversationsOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}

export enum GetCommunityConversationsSortEnum {
    Alphabetically = "ALPHABETICALLY",
    RecentActivity = "RECENT_ACTIVITY",
    Popularity = "POPULARITY"
}


export class GetCommunityConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeOwn" })
  includeOwn?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCommunityConversationsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCommunityConversationsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetCommunityConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetCommunityConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommunityConversationsQueryParams;

  @SpeakeasyMetadata()
  security: GetCommunityConversationsSecurity;
}


export class GetCommunityConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversations?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
