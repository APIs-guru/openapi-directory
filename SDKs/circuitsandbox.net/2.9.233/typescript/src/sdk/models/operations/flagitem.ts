import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FlagItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class FlagItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=itemCreationTime;" })
  itemCreationTime?: string;

  @SpeakeasyMetadata({ data: "form, name=parentId;" })
  parentId?: string;
}


export class FlagItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class FlagItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FlagItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: FlagItemRequestBody;

  @SpeakeasyMetadata()
  security: FlagItemSecurity;
}


export class FlagItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
