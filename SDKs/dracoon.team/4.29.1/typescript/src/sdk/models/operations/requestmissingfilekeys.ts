import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestMissingFileKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_id" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=room_id" })
  roomId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_key" })
  useKey?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class RequestMissingFileKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestMissingFileKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestMissingFileKeysQueryParams;

  @SpeakeasyMetadata()
  headers: RequestMissingFileKeysHeaders;
}


export class RequestMissingFileKeysResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  missingKeysResponse?: shared.MissingKeysResponseOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
