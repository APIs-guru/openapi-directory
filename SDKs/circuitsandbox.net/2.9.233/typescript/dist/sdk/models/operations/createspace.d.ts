import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY",
    InternalExternal = "INTERNAL_EXTERNAL"
}
export declare enum CreateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}
export declare enum CreateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum CreateSpaceRequestBodyTypeEnum {
    Open = "OPEN",
    Closed = "CLOSED",
    Secret = "SECRET"
}
export declare class CreateSpaceRequestBody extends SpeakeasyBase {
    accessModeType: CreateSpaceRequestBodyAccessModeTypeEnum;
    description?: string;
    largePictureBase64?: string;
    name: string;
    role: CreateSpaceRequestBodyRoleEnum;
    smallPictureBase64?: string;
    status: CreateSpaceRequestBodyStatusEnum;
    tags?: string[];
    type: CreateSpaceRequestBodyTypeEnum;
}
export declare class CreateSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateSpaceRequest extends SpeakeasyBase {
    request: CreateSpaceRequestBody;
    security: CreateSpaceSecurity;
}
export declare class CreateSpaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantSpaceWrapper?: any;
    statusCode: number;
}
