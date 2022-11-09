import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFollowersForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveFollowersForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowersForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.RemoveFollowersRequest;
}


export class RemoveFollowersForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveFollowersForProjectPathParams;

  @Metadata()
  queryParams: RemoveFollowersForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveFollowersForProjectRequestBody;
}


export class RemoveFollowersForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveFollowersForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeFollowersForProject200ApplicationJsonObject?: RemoveFollowersForProject200ApplicationJson;
}
