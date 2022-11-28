import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversationsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convIds" })
  convIds: string[];
}


export class GetConversationsByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetConversationsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConversationsByIdQueryParams;

  @SpeakeasyMetadata()
  security: GetConversationsByIdSecurity;
}


export class GetConversationsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversations?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
