import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMySqlDatabasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetMySqlDatabasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMySqlDatabasesQueryParams;
}


export class GetMySqlDatabasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.MySqlDatabase })
  mySqlDatabases?: shared.MySqlDatabase[];

  @Metadata()
  statusCode: number;
}
