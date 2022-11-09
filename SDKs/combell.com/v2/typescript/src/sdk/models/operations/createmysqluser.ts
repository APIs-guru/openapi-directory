import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMySqlUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class CreateMySqlUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class CreateMySqlUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateMySqlUserPathParams;

  @Metadata()
  queryParams: CreateMySqlUserQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CreateMySqlUser;
}


export class CreateMySqlUserResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
