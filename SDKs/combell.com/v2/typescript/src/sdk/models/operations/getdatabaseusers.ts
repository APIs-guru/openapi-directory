import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabaseUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class GetDatabaseUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class GetDatabaseUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabaseUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatabaseUsersQueryParams;
}


export class GetDatabaseUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MySqlUser })
  mySqlUsers?: shared.MySqlUser[];

  @SpeakeasyMetadata()
  statusCode: number;
}
