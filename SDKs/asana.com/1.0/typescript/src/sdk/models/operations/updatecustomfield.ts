import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class UpdateCustomFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateCustomFieldRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CustomFieldRequest;
}


export class UpdateCustomFieldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomFieldPathParams;

  @Metadata()
  queryParams: UpdateCustomFieldQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateCustomFieldRequestBody;
}


export class UpdateCustomField200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CustomFieldResponse;
}


export class UpdateCustomFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomField200ApplicationJsonObject?: UpdateCustomField200ApplicationJson;
}
