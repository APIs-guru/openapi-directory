import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSectionForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class CreateSectionForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateSectionForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.SectionRequest;
}


export class CreateSectionForProject201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.SectionResponse;
}


export class CreateSectionForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSectionForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateSectionForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSectionForProjectRequestBody;
}


export class CreateSectionForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSectionForProject201ApplicationJsonObject?: CreateSectionForProject201ApplicationJson;
}
