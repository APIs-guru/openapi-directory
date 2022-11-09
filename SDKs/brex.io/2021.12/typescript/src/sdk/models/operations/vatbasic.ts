import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatBasicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatBasicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @Metadata({ data: "form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=companyNumber;" })
  companyNumber?: string;

  @Metadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatBasicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatBasicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VatBasicPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatBasicRequestBody;

  @Metadata()
  security: VatBasicSecurity;
}


export class VatBasicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vatBasic200ApplicationJsonAny?: any;

  @Metadata()
  vatBasicDefaultApplicationJsonAny?: any;
}
