import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostApiV1DonationsCreateFundingSourceEnum {
    Merchant = "merchant",
    Customer = "customer"
}


export class PostApiV1DonationsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=funding_source" })
  fundingSource: PostApiV1DonationsCreateFundingSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonprofit_id" })
  nonprofitId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip_code" })
  zipCode?: string;
}


export class PostApiV1DonationsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostApiV1DonationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiV1DonationsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PostApiV1DonationsCreateSecurity;
}


export class PostApiV1DonationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
