import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFollowersForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveFollowersForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowersForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.RemoveFollowersRequest;
}


export class RemoveFollowersForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveFollowersForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFollowersForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveFollowersForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveFollowersForProjectRequestBody;
}


export class RemoveFollowersForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeFollowersForProject200ApplicationJsonObject?: RemoveFollowersForProject200ApplicationJson;
}
