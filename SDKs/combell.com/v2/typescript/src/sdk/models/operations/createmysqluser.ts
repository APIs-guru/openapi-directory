import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMySqlUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class CreateMySqlUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;
}


export class CreateMySqlUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateMySqlUserPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateMySqlUserQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CreateMySqlUser;
}


export class CreateMySqlUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
