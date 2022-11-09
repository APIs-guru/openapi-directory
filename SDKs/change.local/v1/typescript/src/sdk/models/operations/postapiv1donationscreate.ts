import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostApiV1DonationsCreateFundingSourceEnum {
    Merchant = "merchant"
,    Customer = "customer"
}


export class PostApiV1DonationsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=funding_source" })
  fundingSource: PostApiV1DonationsCreateFundingSourceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nonprofit_id" })
  nonprofitId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip_code" })
  zipCode?: string;
}


export class PostApiV1DonationsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostApiV1DonationsCreateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiV1DonationsCreateQueryParams;

  @Metadata()
  security: PostApiV1DonationsCreateSecurity;
}


export class PostApiV1DonationsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
