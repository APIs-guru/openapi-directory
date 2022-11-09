import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFlagItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetFlagItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFlagItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFlagItemPathParams;

  @Metadata()
  security: GetFlagItemSecurity;
}


export class GetFlagItemResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationItems?: any[];

  @Metadata()
  statusCode: number;
}
