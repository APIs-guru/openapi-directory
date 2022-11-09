import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NifBasicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class NifBasicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @Metadata({ data: "form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=nifNumber;" })
  nifNumber: string;
}


export class NifBasicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class NifBasicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NifBasicPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: NifBasicRequestBody;

  @Metadata()
  security: NifBasicSecurity;
}


export class NifBasicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nifBasic200ApplicationJsonAny?: any;

  @Metadata()
  nifBasicDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
