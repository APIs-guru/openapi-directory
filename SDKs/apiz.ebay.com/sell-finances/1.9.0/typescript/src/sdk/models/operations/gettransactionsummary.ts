import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetTransactionSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTransactionSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTransactionSummaryQueryParams;

  @Metadata()
  security: GetTransactionSummarySecurity;
}


export class GetTransactionSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionSummaryResponse?: shared.TransactionSummaryResponse;
}
