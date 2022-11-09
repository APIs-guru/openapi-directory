import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2GetBannedMembersOfGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetBannedMembersOfGroupQueryParams extends SpeakeasyBase {
    currentpage: number;
}
export declare class GroupV2GetBannedMembersOfGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2GetBannedMembersOfGroupRequest extends SpeakeasyBase {
    pathParams: GroupV2GetBannedMembersOfGroupPathParams;
    queryParams: GroupV2GetBannedMembersOfGroupQueryParams;
    security: GroupV2GetBannedMembersOfGroupSecurity;
}
export declare class GroupV2GetBannedMembersOfGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
