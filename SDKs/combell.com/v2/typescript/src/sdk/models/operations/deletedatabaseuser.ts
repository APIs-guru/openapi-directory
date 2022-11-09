import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatabaseUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class DeleteDatabaseUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class DeleteDatabaseUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatabaseUserPathParams;

  @Metadata()
  queryParams: DeleteDatabaseUserQueryParams;
}


export class DeleteDatabaseUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
