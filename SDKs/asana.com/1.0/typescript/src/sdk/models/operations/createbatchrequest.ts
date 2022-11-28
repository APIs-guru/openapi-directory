import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBatchRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateBatchRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.BatchRequest;
}


export class CreateBatchRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.BatchResponse })
  data?: shared.BatchResponse[];
}


export class CreateBatchRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateBatchRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBatchRequestRequestBody;
}


export class CreateBatchRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createBatchRequest200ApplicationJsonObject?: CreateBatchRequest200ApplicationJson;
}
