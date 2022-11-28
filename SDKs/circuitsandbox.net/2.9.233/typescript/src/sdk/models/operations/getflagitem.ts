import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFlagItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetFlagItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFlagItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlagItemPathParams;

  @SpeakeasyMetadata()
  security: GetFlagItemSecurity;
}


export class GetFlagItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationItems?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
