import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayoutSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetPayoutSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPayoutSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPayoutSummaryQueryParams;

  @SpeakeasyMetadata()
  security: GetPayoutSummarySecurity;
}


export class GetPayoutSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payoutSummaryResponse?: shared.PayoutSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
