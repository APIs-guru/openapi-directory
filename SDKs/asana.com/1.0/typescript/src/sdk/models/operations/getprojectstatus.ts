import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_status_gid" })
  projectStatusGid: string;
}


export class GetProjectStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectStatusResponse;
}


export class GetProjectStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectStatusQueryParams;
}


export class GetProjectStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectStatus200ApplicationJsonObject?: GetProjectStatus200ApplicationJson;
}
