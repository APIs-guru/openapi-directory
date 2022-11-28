import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsertSectionForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class InsertSectionForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class InsertSectionForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectSectionInsertRequest;
}


export class InsertSectionForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class InsertSectionForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsertSectionForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: InsertSectionForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InsertSectionForProjectRequestBody;
}


export class InsertSectionForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insertSectionForProject200ApplicationJsonObject?: InsertSectionForProject200ApplicationJson;
}
