import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersNameOrIdRenamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdRenameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class PostContainersNameOrIdRenameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdRenameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersNameOrIdRenamePathParams;

  @SpeakeasyMetadata()
  queryParams: PostContainersNameOrIdRenameQueryParams;

  @SpeakeasyMetadata()
  headers: PostContainersNameOrIdRenameHeaders;
}


export class PostContainersNameOrIdRenameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
