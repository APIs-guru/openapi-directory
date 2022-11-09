import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFollowersForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddFollowersForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddFollowersForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AddFollowersRequest;
}


export class AddFollowersForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddFollowersForProjectPathParams;

  @Metadata()
  queryParams: AddFollowersForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddFollowersForProjectRequestBody;
}


export class AddFollowersForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddFollowersForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addFollowersForProject200ApplicationJsonObject?: AddFollowersForProject200ApplicationJson;
}
