import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateCustomFieldRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CustomFieldRequest;
}


export class CreateCustomFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateCustomFieldQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateCustomFieldRequestBody;
}


export class CreateCustomField201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CustomFieldResponse;
}


export class CreateCustomFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCustomField201ApplicationJsonObject?: CreateCustomField201ApplicationJson;
}
