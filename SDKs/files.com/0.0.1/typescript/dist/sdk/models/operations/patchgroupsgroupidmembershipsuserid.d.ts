import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGroupsGroupIdMembershipsUserIdPathParams extends SpeakeasyBase {
    groupId: number;
    userId: number;
}
export declare class PatchGroupsGroupIdMembershipsUserIdRequestBody extends SpeakeasyBase {
    admin?: boolean;
}
export declare class PatchGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
    pathParams: PatchGroupsGroupIdMembershipsUserIdPathParams;
    request?: PatchGroupsGroupIdMembershipsUserIdRequestBody;
}
export declare class PatchGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntity?: shared.GroupUserEntity;
    statusCode: number;
}
