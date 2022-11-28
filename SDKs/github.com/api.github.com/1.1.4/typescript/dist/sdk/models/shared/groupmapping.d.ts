import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupMappingGroups extends SpeakeasyBase {
    groupDescription: string;
    groupId: string;
    groupName: string;
    status?: string;
    syncedAt?: string;
}
/**
 * External Groups to be mapped to a team for membership
**/
export declare class GroupMapping extends SpeakeasyBase {
    groups?: GroupMappingGroups[];
}
