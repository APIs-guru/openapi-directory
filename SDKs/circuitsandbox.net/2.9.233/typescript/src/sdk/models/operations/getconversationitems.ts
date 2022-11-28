import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversationItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}

export enum GetConversationItemsDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}


export class GetConversationItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetConversationItemsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modTime" })
  modTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;
}


export class GetConversationItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConversationItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConversationItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetConversationItemsSecurity;
}


export class GetConversationItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationItems?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
