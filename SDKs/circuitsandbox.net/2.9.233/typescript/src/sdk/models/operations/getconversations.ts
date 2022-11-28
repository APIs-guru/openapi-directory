import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetConversationsDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}


export class GetConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetConversationsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modTime" })
  modTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results" })
  results?: number;
}


export class GetConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConversationsQueryParams;

  @SpeakeasyMetadata()
  security: GetConversationsSecurity;
}


export class GetConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversations?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
