import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.RemoveCustomFieldSettingRequest;
}


export class RemoveCustomFieldSettingForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveCustomFieldSettingForProjectPathParams;

  @Metadata()
  queryParams: RemoveCustomFieldSettingForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveCustomFieldSettingForProjectRequestBody;
}


export class RemoveCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveCustomFieldSettingForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeCustomFieldSettingForProject200ApplicationJsonObject?: RemoveCustomFieldSettingForProject200ApplicationJson;
}
