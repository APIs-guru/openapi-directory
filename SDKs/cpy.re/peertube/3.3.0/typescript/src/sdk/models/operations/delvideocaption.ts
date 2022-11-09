import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DelVideoCaptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=captionLanguage" })
  captionLanguage: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class DelVideoCaptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoCaptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelVideoCaptionPathParams;

  @Metadata()
  security: DelVideoCaptionSecurity;
}


export class DelVideoCaptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
