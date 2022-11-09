import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InsertSectionForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class InsertSectionForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class InsertSectionForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectSectionInsertRequest;
}


export class InsertSectionForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InsertSectionForProjectPathParams;

  @Metadata()
  queryParams: InsertSectionForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: InsertSectionForProjectRequestBody;
}


export class InsertSectionForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class InsertSectionForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  insertSectionForProject200ApplicationJsonObject?: InsertSectionForProject200ApplicationJson;
}
