import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyDeepsearchLeiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanyDeepsearchLeiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class CompanyDeepsearchLeiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchLeiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyDeepsearchLeiPathParams;

  @SpeakeasyMetadata()
  queryParams: CompanyDeepsearchLeiQueryParams;

  @SpeakeasyMetadata()
  security: CompanyDeepsearchLeiSecurity;
}


export class CompanyDeepsearchLeiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDeepsearchLei200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  companyDeepsearchLeiDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
