import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySearchNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanySearchNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CompanySearchNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanySearchNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanySearchNumberPathParams;

  @Metadata()
  queryParams: CompanySearchNumberQueryParams;

  @Metadata()
  security: CompanySearchNumberSecurity;
}


export class CompanySearchNumberResponse extends SpeakeasyBase {
  @Metadata()
  companySearchNumber200ApplicationJsonAnies?: any[];

  @Metadata()
  companySearchNumberDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
