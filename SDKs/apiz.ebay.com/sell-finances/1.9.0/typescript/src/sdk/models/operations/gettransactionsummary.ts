import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetTransactionSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTransactionSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionSummaryQueryParams;

  @SpeakeasyMetadata()
  security: GetTransactionSummarySecurity;
}


export class GetTransactionSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionSummaryResponse?: shared.TransactionSummaryResponse;
}
