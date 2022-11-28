import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateParticipantInSpacePathParams extends SpeakeasyBase {
    spaceId: string;
}
export declare enum UpdateParticipantInSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}
export declare class UpdateParticipantInSpaceRequestBody extends SpeakeasyBase {
    role: UpdateParticipantInSpaceRequestBodyRoleEnum;
    userId: string;
}
export declare class UpdateParticipantInSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateParticipantInSpaceRequest extends SpeakeasyBase {
    pathParams: UpdateParticipantInSpacePathParams;
    request: UpdateParticipantInSpaceRequestBody;
    security: UpdateParticipantInSpaceSecurity;
}
export declare class UpdateParticipantInSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
