import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyDeepsearchLeiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanyDeepsearchLeiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class CompanyDeepsearchLeiSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchLeiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyDeepsearchLeiPathParams;

  @Metadata()
  queryParams: CompanyDeepsearchLeiQueryParams;

  @Metadata()
  security: CompanyDeepsearchLeiSecurity;
}


export class CompanyDeepsearchLeiResponse extends SpeakeasyBase {
  @Metadata()
  companyDeepsearchLei200ApplicationJsonAny?: any;

  @Metadata()
  companyDeepsearchLeiDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
