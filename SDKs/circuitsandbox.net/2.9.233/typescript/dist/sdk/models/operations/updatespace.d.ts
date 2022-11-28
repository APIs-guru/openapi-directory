import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum UpdateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY",
    InternalExternal = "INTERNAL_EXTERNAL",
    NoChange = "NO_CHANGE"
}
export declare enum UpdateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER",
    NoChange = "NO_CHANGE"
}
export declare enum UpdateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum UpdateSpaceRequestBodyTypeEnum {
    Open = "OPEN",
    Closed = "CLOSED",
    Secret = "SECRET",
    NoChange = "NO_CHANGE"
}
export declare class UpdateSpaceRequestBody extends SpeakeasyBase {
    accessModeType?: UpdateSpaceRequestBodyAccessModeTypeEnum;
    description?: string;
    largePictureBase64?: string;
    name?: string;
    ownerId?: string;
    role?: UpdateSpaceRequestBodyRoleEnum;
    smallPictureBase64?: string;
    status?: UpdateSpaceRequestBodyStatusEnum;
    tags?: string[];
    type?: UpdateSpaceRequestBodyTypeEnum;
}
export declare class UpdateSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateSpaceRequest extends SpeakeasyBase {
    pathParams: UpdateSpacePathParams;
    request?: UpdateSpaceRequestBody;
    security: UpdateSpaceSecurity;
}
export declare class UpdateSpaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantSpaceWrapper?: any;
    statusCode: number;
}
