import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversationsByLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class GetConversationsByLabelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPagePointer" })
  nextPagePointer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetConversationsByLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsByLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConversationsByLabelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConversationsByLabelQueryParams;

  @SpeakeasyMetadata()
  security: GetConversationsByLabelSecurity;
}


export class GetConversationsByLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationsPage?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
