import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanySearchNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CompanySearchNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CompanySearchNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanySearchNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanySearchNamePathParams;

  @SpeakeasyMetadata()
  queryParams: CompanySearchNameQueryParams;

  @SpeakeasyMetadata()
  security: CompanySearchNameSecurity;
}


export class CompanySearchNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companySearchName200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companySearchNameDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
