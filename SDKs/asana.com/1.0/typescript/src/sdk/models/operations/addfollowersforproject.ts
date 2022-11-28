import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFollowersForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddFollowersForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddFollowersForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AddFollowersRequest;
}


export class AddFollowersForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddFollowersForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFollowersForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: AddFollowersForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddFollowersForProjectRequestBody;
}


export class AddFollowersForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addFollowersForProject200ApplicationJsonObject?: AddFollowersForProject200ApplicationJson;
}
