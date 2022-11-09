import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveParticipantCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveParticipantCommunityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=participants" })
  participants: string[];
}


export class RemoveParticipantCommunitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveParticipantCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveParticipantCommunityPathParams;

  @Metadata()
  queryParams: RemoveParticipantCommunityQueryParams;

  @Metadata()
  security: RemoveParticipantCommunitySecurity;
}


export class RemoveParticipantCommunityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
