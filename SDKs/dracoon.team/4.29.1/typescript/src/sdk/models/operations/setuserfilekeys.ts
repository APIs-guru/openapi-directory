import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetUserFileKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetUserFileKeysRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetUserFileKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserFileKeySetBatchRequest;
}


export class SetUserFileKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
