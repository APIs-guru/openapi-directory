import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProjectStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_status_gid" })
  projectStatusGid: string;
}


export class DeleteProjectStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteProjectStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectStatusPathParams;

  @Metadata()
  queryParams: DeleteProjectStatusQueryParams;
}


export class DeleteProjectStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteProjectStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteProjectStatus200ApplicationJsonObject?: DeleteProjectStatus200ApplicationJson;
}
