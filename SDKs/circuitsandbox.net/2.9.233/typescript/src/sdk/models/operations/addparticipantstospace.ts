import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddParticipantsToSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum AddParticipantsToSpaceRequestBodyRoleEnum {
    Default = "DEFAULT",
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}


export class AddParticipantsToSpaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=role;" })
  role: AddParticipantsToSpaceRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "form, name=userId;" })
  userId: string[];
}


export class AddParticipantsToSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantsToSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddParticipantsToSpacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantsToSpaceRequestBody;

  @SpeakeasyMetadata()
  security: AddParticipantsToSpaceSecurity;
}


export class AddParticipantsToSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantAddResults?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
