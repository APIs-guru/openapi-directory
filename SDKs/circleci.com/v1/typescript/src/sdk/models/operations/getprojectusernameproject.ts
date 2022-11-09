import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetProjectUsernameProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectPathParams;

  @Metadata()
  queryParams: GetProjectUsernameProjectQueryParams;
}


export class GetProjectUsernameProjectResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Build })
  builds?: shared.Build[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
