import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyAlternativeSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class CompanyAlternativeSearchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=address;" })
  address?: string;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=phone;" })
  phone?: string;

  @Metadata({ data: "form, name=url;" })
  url?: string;

  @Metadata({ data: "form, name=vat;" })
  vat?: string;
}


export class CompanyAlternativeSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyAlternativeSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyAlternativeSearchPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyAlternativeSearchRequestBody;

  @Metadata()
  security: CompanyAlternativeSearchSecurity;
}


export class CompanyAlternativeSearchResponse extends SpeakeasyBase {
  @Metadata()
  companyAlternativeSearch200ApplicationJsonAnies?: any[];

  @Metadata()
  companyAlternativeSearchDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
