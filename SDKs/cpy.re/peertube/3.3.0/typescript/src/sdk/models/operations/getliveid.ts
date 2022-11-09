import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLiveIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetLiveIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetLiveIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLiveIdPathParams;

  @Metadata()
  security: GetLiveIdSecurity;
}


export class GetLiveIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  liveVideoResponse?: any;

  @Metadata()
  statusCode: number;
}
