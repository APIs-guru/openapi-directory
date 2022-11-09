import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddParticipantsToSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum AddParticipantsToSpaceRequestBodyRoleEnum {
    Default = "DEFAULT"
,    Moderator = "MODERATOR"
,    Author = "AUTHOR"
,    Participant = "PARTICIPANT"
,    Reader = "READER"
}


export class AddParticipantsToSpaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=role;" })
  role: AddParticipantsToSpaceRequestBodyRoleEnum;

  @Metadata({ data: "form, name=userId;" })
  userId: string[];
}


export class AddParticipantsToSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantsToSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddParticipantsToSpacePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantsToSpaceRequestBody;

  @Metadata()
  security: AddParticipantsToSpaceSecurity;
}


export class AddParticipantsToSpaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantAddResults?: any[];

  @Metadata()
  statusCode: number;
}
