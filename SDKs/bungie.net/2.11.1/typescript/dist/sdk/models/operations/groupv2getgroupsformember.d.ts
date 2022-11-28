import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2GetGroupsForMemberPathParams extends SpeakeasyBase {
    filter: number;
    groupType: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2GetGroupsForMemberRequest extends SpeakeasyBase {
    pathParams: GroupV2GetGroupsForMemberPathParams;
}
export declare class GroupV2GetGroupsForMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
