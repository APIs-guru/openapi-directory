import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateParticipantInSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}

export enum UpdateParticipantInSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR"
,    Author = "AUTHOR"
,    Participant = "PARTICIPANT"
,    Reader = "READER"
}


export class UpdateParticipantInSpaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=role;" })
  role: UpdateParticipantInSpaceRequestBodyRoleEnum;

  @Metadata({ data: "form, name=userId;" })
  userId: string;
}


export class UpdateParticipantInSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateParticipantInSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateParticipantInSpacePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateParticipantInSpaceRequestBody;

  @Metadata()
  security: UpdateParticipantInSpaceSecurity;
}


export class UpdateParticipantInSpaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
