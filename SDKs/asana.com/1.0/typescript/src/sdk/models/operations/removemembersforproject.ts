import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveMembersForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class RemoveMembersForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveMembersForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.RemoveMembersRequest;
}


export class RemoveMembersForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveMembersForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveMembersForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveMembersForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveMembersForProjectRequestBody;
}


export class RemoveMembersForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeMembersForProject200ApplicationJsonObject?: RemoveMembersForProject200ApplicationJson;
}
