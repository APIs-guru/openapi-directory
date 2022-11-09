import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchConversationsScopeEnum {
    Files = "FILES"
,    People = "PEOPLE"
,    Members = "MEMBERS"
,    Messages = "MESSAGES"
,    Sentby = "SENTBY"
,    All = "ALL"
,    Conversations = "CONVERSATIONS"
,    Label = "LABEL"
,    Filter = "FILTER"
}


export class SearchConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemIds" })
  includeItemIds?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: SearchConversationsScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class SearchConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchConversationsQueryParams;

  @Metadata()
  security: SearchConversationsSecurity;
}


export class SearchConversationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationSearchResult?: any;

  @Metadata()
  statusCode: number;
}
