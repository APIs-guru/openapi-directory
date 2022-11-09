import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRateTablesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;
}


export class GetRateTablesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetRateTablesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRateTablesQueryParams;

  @Metadata()
  security: GetRateTablesSecurity;
}


export class GetRateTablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rateTableResponse?: shared.RateTableResponse;

  @Metadata()
  statusCode: number;
}
