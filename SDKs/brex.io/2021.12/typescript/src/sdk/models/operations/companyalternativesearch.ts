import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyAlternativeSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class CompanyAlternativeSearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=address;" })
  address?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=phone;" })
  phone?: string;

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url?: string;

  @SpeakeasyMetadata({ data: "form, name=vat;" })
  vat?: string;
}


export class CompanyAlternativeSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyAlternativeSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyAlternativeSearchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyAlternativeSearchRequestBody;

  @SpeakeasyMetadata()
  security: CompanyAlternativeSearchSecurity;
}


export class CompanyAlternativeSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyAlternativeSearch200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyAlternativeSearchDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
