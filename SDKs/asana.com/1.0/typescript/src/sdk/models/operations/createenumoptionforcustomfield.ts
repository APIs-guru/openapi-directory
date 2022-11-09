import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class CreateEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateEnumOptionForCustomFieldRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOptionRequest;
}


export class CreateEnumOptionForCustomFieldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEnumOptionForCustomFieldPathParams;

  @Metadata()
  queryParams: CreateEnumOptionForCustomFieldQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateEnumOptionForCustomFieldRequestBody;
}


export class CreateEnumOptionForCustomField201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class CreateEnumOptionForCustomFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createEnumOptionForCustomField201ApplicationJsonObject?: CreateEnumOptionForCustomField201ApplicationJson;
}
