import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AddCustomFieldSettingRequest;
}


export class AddCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.CustomFieldSettingResponse;
}


export class AddCustomFieldSettingForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddCustomFieldSettingForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: AddCustomFieldSettingForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddCustomFieldSettingForProjectRequestBody;
}


export class AddCustomFieldSettingForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addCustomFieldSettingForProject200ApplicationJsonObject?: AddCustomFieldSettingForProject200ApplicationJson;
}
