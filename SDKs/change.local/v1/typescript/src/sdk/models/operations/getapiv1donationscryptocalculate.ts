import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApiV1DonationsCryptoCalculateCurrencyEnum {
    Eth = "eth"
,    Btc = "btc"
}


export class GetApiV1DonationsCryptoCalculateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency: GetApiV1DonationsCryptoCalculateCurrencyEnum;
}


export class GetApiV1DonationsCryptoCalculateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCryptoCalculateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1DonationsCryptoCalculateQueryParams;

  @Metadata()
  security: GetApiV1DonationsCryptoCalculateSecurity;
}


export class GetApiV1DonationsCryptoCalculateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
