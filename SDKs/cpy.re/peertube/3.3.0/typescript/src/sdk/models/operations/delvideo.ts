import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class DelVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelVideoPathParams;

  @SpeakeasyMetadata()
  security: DelVideoSecurity;
}


export class DelVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
