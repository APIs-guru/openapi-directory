import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AddCustomFieldSettingRequest;
}


export class AddCustomFieldSettingForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddCustomFieldSettingForProjectPathParams;

  @Metadata()
  queryParams: AddCustomFieldSettingForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddCustomFieldSettingForProjectRequestBody;
}


export class AddCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CustomFieldSettingResponse;
}


export class AddCustomFieldSettingForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addCustomFieldSettingForProject200ApplicationJsonObject?: AddCustomFieldSettingForProject200ApplicationJson;
}
