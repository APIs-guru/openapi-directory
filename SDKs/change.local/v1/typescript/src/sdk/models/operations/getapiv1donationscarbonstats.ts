import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1DonationsCarbonStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;
}


export class GetApiV1DonationsCarbonStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCarbonStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1DonationsCarbonStatsQueryParams;

  @Metadata()
  security: GetApiV1DonationsCarbonStatsSecurity;
}


export class GetApiV1DonationsCarbonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
