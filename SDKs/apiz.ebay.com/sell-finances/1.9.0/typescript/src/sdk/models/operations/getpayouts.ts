import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayoutsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetPayoutsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPayoutsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayoutsQueryParams;

  @Metadata()
  security: GetPayoutsSecurity;
}


export class GetPayoutsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payouts?: shared.Payouts;

  @Metadata()
  statusCode: number;
}
