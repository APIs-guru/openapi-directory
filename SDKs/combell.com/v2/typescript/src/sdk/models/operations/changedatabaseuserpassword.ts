import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeDatabaseUserPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ChangeDatabaseUserPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName: string;
}


export class ChangeDatabaseUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeDatabaseUserPasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeDatabaseUserPasswordQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateUserPasswordRequest;
}


export class ChangeDatabaseUserPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
