import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationsByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=convIds" })
  convIds: string[];
}


export class GetConversationsByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConversationsByIdQueryParams;

  @Metadata()
  security: GetConversationsByIdSecurity;
}


export class GetConversationsByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversations?: any[];

  @Metadata()
  statusCode: number;
}
