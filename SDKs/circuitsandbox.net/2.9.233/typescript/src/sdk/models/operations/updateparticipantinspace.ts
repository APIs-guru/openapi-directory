import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateParticipantInSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}

export enum UpdateParticipantInSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}


export class UpdateParticipantInSpaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=role;" })
  role: UpdateParticipantInSpaceRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "form, name=userId;" })
  userId: string;
}


export class UpdateParticipantInSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateParticipantInSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateParticipantInSpacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateParticipantInSpaceRequestBody;

  @SpeakeasyMetadata()
  security: UpdateParticipantInSpaceSecurity;
}


export class UpdateParticipantInSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
