import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DuplicateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class DuplicateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DuplicateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectDuplicateRequest;
}


export class DuplicateProject201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.JobResponse;
}


export class DuplicateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DuplicateProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: DuplicateProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DuplicateProjectRequestBody;
}


export class DuplicateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  duplicateProject201ApplicationJsonObject?: DuplicateProject201ApplicationJson;
}
