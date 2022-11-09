import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBatchRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateBatchRequestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.BatchRequest;
}


export class CreateBatchRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateBatchRequestQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBatchRequestRequestBody;
}


export class CreateBatchRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.BatchResponse })
  data?: shared.BatchResponse[];
}


export class CreateBatchRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createBatchRequest200ApplicationJsonObject?: CreateBatchRequest200ApplicationJson;
}
