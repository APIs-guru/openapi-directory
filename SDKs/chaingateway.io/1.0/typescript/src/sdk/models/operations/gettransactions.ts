import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTransactionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTransactionsRequest;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTransactions?: shared.GetTransactions;
}
