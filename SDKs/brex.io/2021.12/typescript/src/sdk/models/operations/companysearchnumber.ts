import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanySearchNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanySearchNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CompanySearchNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanySearchNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanySearchNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: CompanySearchNumberQueryParams;

  @SpeakeasyMetadata()
  security: CompanySearchNumberSecurity;
}


export class CompanySearchNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companySearchNumber200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companySearchNumberDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
