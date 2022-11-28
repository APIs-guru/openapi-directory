import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetUserFileKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetUserFileKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetUserFileKeysHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserFileKeySetBatchRequest;
}


export class SetUserFileKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
