import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabaseUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class GetDatabaseUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class GetDatabaseUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabaseUsersPathParams;

  @Metadata()
  queryParams: GetDatabaseUsersQueryParams;
}


export class GetDatabaseUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MySqlUser })
  mySqlUsers?: shared.MySqlUser[];

  @Metadata()
  statusCode: number;
}
