import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeDatabaseUserPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ChangeDatabaseUserPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class ChangeDatabaseUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeDatabaseUserPasswordPathParams;

  @Metadata()
  queryParams: ChangeDatabaseUserPasswordQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateUserPasswordRequest;
}


export class ChangeDatabaseUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
