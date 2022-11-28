import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2GetMembersOfGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetMembersOfGroupQueryParams extends SpeakeasyBase {
    currentpage: number;
    memberType?: number;
    nameSearch?: string;
}
export declare class GroupV2GetMembersOfGroupRequest extends SpeakeasyBase {
    pathParams: GroupV2GetMembersOfGroupPathParams;
    queryParams: GroupV2GetMembersOfGroupQueryParams;
}
export declare class GroupV2GetMembersOfGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
