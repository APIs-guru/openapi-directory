import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnumOptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enum_option_gid" })
  enumOptionGid: string;
}


export class UpdateEnumOptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateEnumOptionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOptionRequest;
}


export class UpdateEnumOptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnumOptionPathParams;

  @Metadata()
  queryParams: UpdateEnumOptionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateEnumOptionRequestBody;
}


export class UpdateEnumOption200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class UpdateEnumOptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateEnumOption200ApplicationJsonObject?: UpdateEnumOption200ApplicationJson;
}
