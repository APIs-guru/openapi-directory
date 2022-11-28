import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class GetCustomFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetCustomField200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.CustomFieldResponse;
}


export class GetCustomFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldQueryParams;
}


export class GetCustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomField200ApplicationJsonObject?: GetCustomField200ApplicationJson;
}
