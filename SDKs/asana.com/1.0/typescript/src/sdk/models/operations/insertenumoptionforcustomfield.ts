import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsertEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
  customFieldGid: string;
}


export class InsertEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class InsertEnumOptionForCustomFieldRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOptionInsertRequest;
}


export class InsertEnumOptionForCustomField200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.EnumOption;
}


export class InsertEnumOptionForCustomFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsertEnumOptionForCustomFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: InsertEnumOptionForCustomFieldQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: InsertEnumOptionForCustomFieldRequestBody;
}


export class InsertEnumOptionForCustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insertEnumOptionForCustomField200ApplicationJsonObject?: InsertEnumOptionForCustomField200ApplicationJson;
}
