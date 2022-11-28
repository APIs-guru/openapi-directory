import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchConversationsScopeEnum {
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


export class SearchConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemIds" })
  includeItemIds?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: SearchConversationsScopeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class SearchConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchConversationsQueryParams;

  @SpeakeasyMetadata()
  security: SearchConversationsSecurity;
}


export class SearchConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationSearchResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
