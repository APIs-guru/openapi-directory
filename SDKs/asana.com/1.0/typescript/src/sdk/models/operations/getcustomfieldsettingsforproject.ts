import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldSettingsForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class GetCustomFieldSettingsForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetCustomFieldSettingsForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldSettingResponse })
  data?: shared.CustomFieldSettingResponse[];
}


export class GetCustomFieldSettingsForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldSettingsForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldSettingsForProjectQueryParams;
}


export class GetCustomFieldSettingsForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomFieldSettingsForProject200ApplicationJsonObject?: GetCustomFieldSettingsForProject200ApplicationJson;
}
