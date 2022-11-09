import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeDatabaseUserStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ChangeDatabaseUserStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class ChangeDatabaseUserStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeDatabaseUserStatusPathParams;

  @Metadata()
  queryParams: ChangeDatabaseUserStatusQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateUserStatusRequest;
}


export class ChangeDatabaseUserStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
