import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayoutSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetPayoutSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPayoutSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayoutSummaryQueryParams;

  @Metadata()
  security: GetPayoutSummarySecurity;
}


export class GetPayoutSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payoutSummaryResponse?: shared.PayoutSummaryResponse;

  @Metadata()
  statusCode: number;
}
