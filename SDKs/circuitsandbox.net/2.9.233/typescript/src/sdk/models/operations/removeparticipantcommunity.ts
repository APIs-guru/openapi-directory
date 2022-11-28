import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveParticipantCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveParticipantCommunityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participants" })
  participants: string[];
}


export class RemoveParticipantCommunitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveParticipantCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveParticipantCommunityPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveParticipantCommunityQueryParams;

  @SpeakeasyMetadata()
  security: RemoveParticipantCommunitySecurity;
}


export class RemoveParticipantCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
