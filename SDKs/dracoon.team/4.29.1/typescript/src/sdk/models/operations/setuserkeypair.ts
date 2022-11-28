import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetUserKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetUserKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetUserKeyPairHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserKeyPairContainer;
}


export class SetUserKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
