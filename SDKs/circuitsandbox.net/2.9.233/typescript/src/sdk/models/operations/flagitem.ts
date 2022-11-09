import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FlagItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class FlagItemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=itemCreationTime;" })
  itemCreationTime?: string;

  @Metadata({ data: "form, name=parentId;" })
  parentId?: string;
}


export class FlagItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class FlagItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FlagItemPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: FlagItemRequestBody;

  @Metadata()
  security: FlagItemSecurity;
}


export class FlagItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
