import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PinTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class PinTopicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=position;" })
  position: number;
}


export class PinTopicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PinTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PinTopicPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PinTopicRequestBody;

  @Metadata()
  security: PinTopicSecurity;
}


export class PinTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
