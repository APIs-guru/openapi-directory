import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V2UpdateWelcomeBoxContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class V2UpdateWelcomeBoxContentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=displayWelcomeBox;" })
  displayWelcomeBox?: boolean;
}


export class V2UpdateWelcomeBoxContentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2UpdateWelcomeBoxContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: V2UpdateWelcomeBoxContentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: V2UpdateWelcomeBoxContentRequestBody;

  @SpeakeasyMetadata()
  security: V2UpdateWelcomeBoxContentSecurity;
}


export class V2UpdateWelcomeBoxContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
