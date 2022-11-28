import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class DeleteDatabaseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class DeleteDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatabasePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteDatabaseQueryParams;
}


export class DeleteDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
