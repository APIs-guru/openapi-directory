import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InsertEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class InsertEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class InsertEnumOptionForCustomFieldRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOptionInsertRequest;
}


export class InsertEnumOptionForCustomFieldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InsertEnumOptionForCustomFieldPathParams;

  @Metadata()
  queryParams: InsertEnumOptionForCustomFieldQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: InsertEnumOptionForCustomFieldRequestBody;
}


export class InsertEnumOptionForCustomField200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class InsertEnumOptionForCustomFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  insertEnumOptionForCustomField200ApplicationJsonObject?: InsertEnumOptionForCustomField200ApplicationJson;
}
