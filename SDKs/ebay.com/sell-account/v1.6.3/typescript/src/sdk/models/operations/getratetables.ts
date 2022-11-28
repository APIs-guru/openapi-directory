import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRateTablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;
}


export class GetRateTablesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetRateTablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRateTablesQueryParams;

  @SpeakeasyMetadata()
  security: GetRateTablesSecurity;
}


export class GetRateTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rateTableResponse?: shared.RateTableResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
