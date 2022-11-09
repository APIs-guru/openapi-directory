import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class DeleteDatabaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class DeleteDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatabasePathParams;

  @Metadata()
  queryParams: DeleteDatabaseQueryParams;
}


export class DeleteDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
