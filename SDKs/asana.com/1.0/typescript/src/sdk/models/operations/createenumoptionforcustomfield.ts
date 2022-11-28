import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class CreateEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateEnumOptionForCustomFieldRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOptionRequestInput;
}


export class CreateEnumOptionForCustomField201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class CreateEnumOptionForCustomFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnumOptionForCustomFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateEnumOptionForCustomFieldQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEnumOptionForCustomFieldRequestBodyInput;
}


export class CreateEnumOptionForCustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createEnumOptionForCustomField201ApplicationJsonObject?: CreateEnumOptionForCustomField201ApplicationJson;
}
