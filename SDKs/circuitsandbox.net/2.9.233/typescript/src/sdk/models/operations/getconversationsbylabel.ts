import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationsByLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class GetConversationsByLabelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextPagePointer" })
  nextPagePointer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetConversationsByLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsByLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConversationsByLabelPathParams;

  @Metadata()
  queryParams: GetConversationsByLabelQueryParams;

  @Metadata()
  security: GetConversationsByLabelSecurity;
}


export class GetConversationsByLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationsPage?: any;

  @Metadata()
  statusCode: number;
}
