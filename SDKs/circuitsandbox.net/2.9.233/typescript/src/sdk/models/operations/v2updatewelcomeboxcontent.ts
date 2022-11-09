import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V2UpdateWelcomeBoxContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=content" })
  content: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class V2UpdateWelcomeBoxContentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=displayWelcomeBox;" })
  displayWelcomeBox?: boolean;
}


export class V2UpdateWelcomeBoxContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2UpdateWelcomeBoxContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: V2UpdateWelcomeBoxContentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: V2UpdateWelcomeBoxContentRequestBody;

  @Metadata()
  security: V2UpdateWelcomeBoxContentSecurity;
}


export class V2UpdateWelcomeBoxContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
