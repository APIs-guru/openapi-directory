import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddParticipantCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddParticipantCommunityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=participants;" })
  participants: string[];
}


export class AddParticipantCommunitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddParticipantCommunityPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantCommunityRequestBody;

  @Metadata()
  security: AddParticipantCommunitySecurity;
}


export class AddParticipantCommunityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
