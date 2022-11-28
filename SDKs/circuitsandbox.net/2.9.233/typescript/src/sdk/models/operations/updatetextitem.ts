import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTextItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateTextItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @SpeakeasyMetadata({ data: "form, name=subject;" })
  subject?: string;
}


export class UpdateTextItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateTextItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTextItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTextItemRequestBody;

  @SpeakeasyMetadata()
  security: UpdateTextItemSecurity;
}


export class UpdateTextItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationItem?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
