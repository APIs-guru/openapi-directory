import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveMembersForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveMembersForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveMembersForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.RemoveMembersRequest;
}


export class RemoveMembersForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveMembersForProjectPathParams;

  @Metadata()
  queryParams: RemoveMembersForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveMembersForProjectRequestBody;
}


export class RemoveMembersForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveMembersForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeMembersForProject200ApplicationJsonObject?: RemoveMembersForProject200ApplicationJson;
}
