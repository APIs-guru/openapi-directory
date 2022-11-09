import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class DeleteContainersGroupsNameOrIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;
}


export class DeleteContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteContainersGroupsNameOrIdPathParams;

  @Metadata()
  queryParams: DeleteContainersGroupsNameOrIdQueryParams;

  @Metadata()
  headers: DeleteContainersGroupsNameOrIdHeaders;
}


export class DeleteContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
