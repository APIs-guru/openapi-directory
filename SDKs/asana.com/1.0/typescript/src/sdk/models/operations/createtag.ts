import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TagRequest;
}


export class CreateTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateTagQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTagRequestBody;
}


export class CreateTag201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TagResponse;
}


export class CreateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createTag201ApplicationJsonObject?: CreateTag201ApplicationJson;
}
