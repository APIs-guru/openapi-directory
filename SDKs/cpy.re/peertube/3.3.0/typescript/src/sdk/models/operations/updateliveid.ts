import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLiveIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class UpdateLiveIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateLiveIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLiveIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UpdateLiveIdSecurity;
}


export class UpdateLiveIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
