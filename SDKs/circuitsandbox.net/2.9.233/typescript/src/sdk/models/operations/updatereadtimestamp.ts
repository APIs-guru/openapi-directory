import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReadTimestampPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateReadTimestampRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=timestamp;" })
  timestamp: Date;
}


export class UpdateReadTimestampSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateReadTimestampRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateReadTimestampPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateReadTimestampRequestBody;

  @Metadata()
  security: UpdateReadTimestampSecurity;
}


export class UpdateReadTimestampResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
