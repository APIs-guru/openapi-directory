import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class DeleteContainersGroupsNameOrIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;
}


export class DeleteContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteContainersGroupsNameOrIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteContainersGroupsNameOrIdQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteContainersGroupsNameOrIdHeaders;
}


export class DeleteContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
