import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.RemoveCustomFieldSettingRequest;
}


export class RemoveCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveCustomFieldSettingForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveCustomFieldSettingForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveCustomFieldSettingForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveCustomFieldSettingForProjectRequestBody;
}


export class RemoveCustomFieldSettingForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeCustomFieldSettingForProject200ApplicationJsonObject?: RemoveCustomFieldSettingForProject200ApplicationJson;
}
