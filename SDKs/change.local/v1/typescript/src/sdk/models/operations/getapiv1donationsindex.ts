import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1DonationsIndexQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiV1DonationsIndexSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1DonationsIndexQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1DonationsIndexSecurity;
}


export class GetApiV1DonationsIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
