import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainersNameOrIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class DeleteContainersNameOrIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;
}


export class DeleteContainersNameOrIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteContainersNameOrIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteContainersNameOrIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteContainersNameOrIdQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteContainersNameOrIdHeaders;
}


export class DeleteContainersNameOrIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
