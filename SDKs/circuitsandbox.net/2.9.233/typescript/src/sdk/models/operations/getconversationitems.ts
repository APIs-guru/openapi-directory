import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}

export enum GetConversationItemsDirectionEnum {
    Before = "BEFORE"
,    After = "AFTER"
}


export class GetConversationItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetConversationItemsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modTime" })
  modTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;
}


export class GetConversationItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationItemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConversationItemsPathParams;

  @Metadata()
  queryParams: GetConversationItemsQueryParams;

  @Metadata()
  security: GetConversationItemsSecurity;
}


export class GetConversationItemsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationItems?: any[];

  @Metadata()
  statusCode: number;
}
