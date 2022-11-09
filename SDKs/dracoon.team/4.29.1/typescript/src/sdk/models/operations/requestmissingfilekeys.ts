import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestMissingFileKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=file_id" })
  fileId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=room_id" })
  roomId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=use_key" })
  useKey?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class RequestMissingFileKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestMissingFileKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestMissingFileKeysQueryParams;

  @Metadata()
  headers: RequestMissingFileKeysHeaders;
}


export class RequestMissingFileKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  missingKeysResponse?: shared.MissingKeysResponse;

  @Metadata()
  statusCode: number;
}
