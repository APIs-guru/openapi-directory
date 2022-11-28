import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1DonationsCryptoCalculateCurrencyEnum {
    Eth = "eth",
    Btc = "btc"
}


export class GetApiV1DonationsCryptoCalculateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency: GetApiV1DonationsCryptoCalculateCurrencyEnum;
}


export class GetApiV1DonationsCryptoCalculateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCryptoCalculateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1DonationsCryptoCalculateQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1DonationsCryptoCalculateSecurity;
}


export class GetApiV1DonationsCryptoCalculateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
