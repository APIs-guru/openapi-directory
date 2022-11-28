import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMySqlDatabasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetMySqlDatabasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMySqlDatabasesQueryParams;
}


export class GetMySqlDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.MySqlDatabase })
  mySqlDatabases?: shared.MySqlDatabase[];

  @SpeakeasyMetadata()
  statusCode: number;
}
