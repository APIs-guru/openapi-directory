import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1DonationsShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetApiV1DonationsShowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsShowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1DonationsShowQueryParams;

  @Metadata()
  security: GetApiV1DonationsShowSecurity;
}


export class GetApiV1DonationsShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
