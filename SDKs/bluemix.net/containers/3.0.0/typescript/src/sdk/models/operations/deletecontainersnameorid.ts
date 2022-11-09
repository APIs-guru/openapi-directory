import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainersNameOrIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class DeleteContainersNameOrIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;
}


export class DeleteContainersNameOrIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteContainersNameOrIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteContainersNameOrIdPathParams;

  @Metadata()
  queryParams: DeleteContainersNameOrIdQueryParams;

  @Metadata()
  headers: DeleteContainersNameOrIdHeaders;
}


export class DeleteContainersNameOrIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
