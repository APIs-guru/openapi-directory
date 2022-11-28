import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateReadTimestampPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateReadTimestampRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=timestamp;" })
  timestamp: Date;
}


export class UpdateReadTimestampSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateReadTimestampRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateReadTimestampPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateReadTimestampRequestBody;

  @SpeakeasyMetadata()
  security: UpdateReadTimestampSecurity;
}


export class UpdateReadTimestampResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
