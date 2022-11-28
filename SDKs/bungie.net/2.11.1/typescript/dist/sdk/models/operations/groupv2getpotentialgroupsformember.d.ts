import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2GetPotentialGroupsForMemberPathParams extends SpeakeasyBase {
    filter: number;
    groupType: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2GetPotentialGroupsForMemberRequest extends SpeakeasyBase {
    pathParams: GroupV2GetPotentialGroupsForMemberPathParams;
}
export declare class GroupV2GetPotentialGroupsForMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
