import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUsernameProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetProjectUsernameProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUsernameProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectUsernameProjectQueryParams;
}


export class GetProjectUsernameProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Build })
  builds?: shared.Build[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
