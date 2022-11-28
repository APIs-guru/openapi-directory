import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeDatabaseUserStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ChangeDatabaseUserStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class ChangeDatabaseUserStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeDatabaseUserStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeDatabaseUserStatusQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateUserStatusRequest;
}


export class ChangeDatabaseUserStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
