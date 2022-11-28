import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCustomFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class UpdateCustomFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateCustomFieldRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.CustomFieldRequestInput;
}


export class UpdateCustomField200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.CustomFieldResponse;
}


export class UpdateCustomFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCustomFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateCustomFieldQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateCustomFieldRequestBodyInput;
}


export class UpdateCustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCustomField200ApplicationJsonObject?: UpdateCustomField200ApplicationJson;
}
