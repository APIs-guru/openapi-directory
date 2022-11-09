import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdRenamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdRenameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class PostContainersNameOrIdRenameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdRenameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdRenamePathParams;

  @Metadata()
  queryParams: PostContainersNameOrIdRenameQueryParams;

  @Metadata()
  headers: PostContainersNameOrIdRenameHeaders;
}


export class PostContainersNameOrIdRenameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
