import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionid" })
  transactionid: string;
}


export class ExecuteTransactionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ExecuteTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExecuteTransactionPathParams;

  @SpeakeasyMetadata()
  queryParams: ExecuteTransactionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvRokuTransactionRequest;
}


export class ExecuteTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
