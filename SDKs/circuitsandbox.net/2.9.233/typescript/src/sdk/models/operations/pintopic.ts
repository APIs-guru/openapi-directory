import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PinTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class PinTopicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=position;" })
  position: number;
}


export class PinTopicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PinTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PinTopicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PinTopicRequestBody;

  @SpeakeasyMetadata()
  security: PinTopicSecurity;
}


export class PinTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
