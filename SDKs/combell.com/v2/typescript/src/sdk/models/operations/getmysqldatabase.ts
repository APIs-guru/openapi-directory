import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMySqlDatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class GetMySqlDatabaseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class GetMySqlDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMySqlDatabasePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMySqlDatabaseQueryParams;
}


export class GetMySqlDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  mySqlDatabase?: shared.MySqlDatabase;

  @SpeakeasyMetadata()
  statusCode: number;
}
