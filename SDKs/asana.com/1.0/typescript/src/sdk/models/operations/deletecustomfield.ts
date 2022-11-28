import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCustomFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class DeleteCustomFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteCustomField200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteCustomFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCustomFieldQueryParams;
}


export class DeleteCustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCustomField200ApplicationJsonObject?: DeleteCustomField200ApplicationJson;
}
