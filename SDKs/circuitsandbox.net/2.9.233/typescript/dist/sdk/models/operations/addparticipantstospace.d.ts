import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddParticipantsToSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum AddParticipantsToSpaceRequestBodyRoleEnum {
    Default = "DEFAULT",
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}
export declare class AddParticipantsToSpaceRequestBody extends SpeakeasyBase {
    role: AddParticipantsToSpaceRequestBodyRoleEnum;
    userId: string[];
}
export declare class AddParticipantsToSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddParticipantsToSpaceRequest extends SpeakeasyBase {
    pathParams: AddParticipantsToSpacePathParams;
    request: AddParticipantsToSpaceRequestBody;
    security: AddParticipantsToSpaceSecurity;
}
export declare class AddParticipantsToSpaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantAddResults?: any[];
    statusCode: number;
}
