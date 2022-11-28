import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddParticipantCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddParticipantCommunityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=participants;" })
  participants: string[];
}


export class AddParticipantCommunitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddParticipantCommunityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantCommunityRequestBody;

  @SpeakeasyMetadata()
  security: AddParticipantCommunitySecurity;
}


export class AddParticipantCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
