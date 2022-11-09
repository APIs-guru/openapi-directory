import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionid" })
  transactionid: string;
}


export class ExecuteTransactionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ExecuteTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExecuteTransactionPathParams;

  @Metadata()
  queryParams: ExecuteTransactionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvRokuTransactionRequest;
}


export class ExecuteTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
