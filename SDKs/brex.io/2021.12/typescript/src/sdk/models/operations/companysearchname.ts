import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanySearchNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CompanySearchNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CompanySearchNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanySearchNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanySearchNamePathParams;

  @Metadata()
  queryParams: CompanySearchNameQueryParams;

  @Metadata()
  security: CompanySearchNameSecurity;
}


export class CompanySearchNameResponse extends SpeakeasyBase {
  @Metadata()
  companySearchName200ApplicationJsonAnies?: any[];

  @Metadata()
  companySearchNameDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
