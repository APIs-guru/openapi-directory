import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSectionForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class CreateSectionForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateSectionForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionRequest;
}


export class CreateSectionForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSectionForProjectPathParams;

  @Metadata()
  queryParams: CreateSectionForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSectionForProjectRequestBody;
}


export class CreateSectionForProject201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionResponse;
}


export class CreateSectionForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSectionForProject201ApplicationJsonObject?: CreateSectionForProject201ApplicationJson;
}
