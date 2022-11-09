import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddMembersForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddMembersForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddMembersForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AddMembersRequest;
}


export class AddMembersForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddMembersForProjectPathParams;

  @Metadata()
  queryParams: AddMembersForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddMembersForProjectRequestBody;
}


export class AddMembersForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddMembersForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addMembersForProject200ApplicationJsonObject?: AddMembersForProject200ApplicationJson;
}
