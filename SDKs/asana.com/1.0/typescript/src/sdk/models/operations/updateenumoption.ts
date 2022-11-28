import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEnumOptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enum_option_gid" })
  enumOptionGid: string;
}


export class UpdateEnumOptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateEnumOptionRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOptionRequestInput;
}


export class UpdateEnumOption200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class UpdateEnumOptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnumOptionPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateEnumOptionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateEnumOptionRequestBodyInput;
}


export class UpdateEnumOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateEnumOption200ApplicationJsonObject?: UpdateEnumOption200ApplicationJson;
}
