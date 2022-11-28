import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDatabaseUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class DeleteDatabaseUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class DeleteDatabaseUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatabaseUserPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteDatabaseUserQueryParams;
}


export class DeleteDatabaseUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
