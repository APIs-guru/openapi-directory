import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelVideoCaptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=captionLanguage" })
  captionLanguage: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class DelVideoCaptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoCaptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelVideoCaptionPathParams;

  @SpeakeasyMetadata()
  security: DelVideoCaptionSecurity;
}


export class DelVideoCaptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
