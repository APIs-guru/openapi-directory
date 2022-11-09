import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMySqlDatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class GetMySqlDatabaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class GetMySqlDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMySqlDatabasePathParams;

  @Metadata()
  queryParams: GetMySqlDatabaseQueryParams;
}


export class GetMySqlDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mySqlDatabase?: shared.MySqlDatabase;

  @Metadata()
  statusCode: number;
}
