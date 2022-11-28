import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Room information
**/
export declare class LastAdminUserRoom extends SpeakeasyBase {
    id: number;
    lastAdminInGroup: boolean;
    lastAdminInGroupId?: number;
    name: string;
    parentId?: number;
    parentPath: string;
}
