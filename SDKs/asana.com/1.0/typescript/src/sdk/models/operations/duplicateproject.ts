import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DuplicateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class DuplicateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DuplicateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectDuplicateRequest;
}


export class DuplicateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DuplicateProjectPathParams;

  @Metadata()
  queryParams: DuplicateProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: DuplicateProjectRequestBody;
}


export class DuplicateProject201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.JobResponse;
}


export class DuplicateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  duplicateProject201ApplicationJsonObject?: DuplicateProject201ApplicationJson;
}
