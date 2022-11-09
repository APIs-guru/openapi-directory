import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1DonationsIndexQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiV1DonationsIndexSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsIndexRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1DonationsIndexQueryParams;

  @Metadata()
  security: GetApiV1DonationsIndexSecurity;
}


export class GetApiV1DonationsIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
