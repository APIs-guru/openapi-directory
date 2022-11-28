import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGroupUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchGroupUsersIdRequestBody extends SpeakeasyBase {
    admin?: boolean;
    groupId: number;
    userId: number;
}
export declare class PatchGroupUsersIdRequest extends SpeakeasyBase {
    pathParams: PatchGroupUsersIdPathParams;
    request: PatchGroupUsersIdRequestBody;
}
export declare class PatchGroupUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntity?: shared.GroupUserEntity;
    statusCode: number;
}
