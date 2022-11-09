import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTextItemWithParentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class AddTextItemWithParentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @Metadata({ data: "form, name=content;" })
  content?: string;

  @Metadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @Metadata({ data: "form, name=subject;" })
  subject?: string;
}


export class AddTextItemWithParentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddTextItemWithParentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTextItemWithParentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: AddTextItemWithParentRequestBody;

  @Metadata()
  security: AddTextItemWithParentSecurity;
}


export class AddTextItemWithParentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationItem?: any;

  @Metadata()
  statusCode: number;
}
