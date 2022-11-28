import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddMembersForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class AddMembersForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddMembersForProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AddMembersRequest;
}


export class AddMembersForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddMembersForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddMembersForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: AddMembersForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddMembersForProjectRequestBody;
}


export class AddMembersForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addMembersForProject200ApplicationJsonObject?: AddMembersForProject200ApplicationJson;
}
