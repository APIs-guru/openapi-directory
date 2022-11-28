import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1DonationsShowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetApiV1DonationsShowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1DonationsShowQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1DonationsShowSecurity;
}


export class GetApiV1DonationsShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
