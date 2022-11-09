import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetConversationsDirectionEnum {
    Before = "BEFORE"
,    After = "AFTER"
}


export class GetConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetConversationsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modTime" })
  modTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;
}


export class GetConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConversationsQueryParams;

  @Metadata()
  security: GetConversationsSecurity;
}


export class GetConversationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversations?: any[];

  @Metadata()
  statusCode: number;
}
