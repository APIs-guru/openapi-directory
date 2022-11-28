import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customer settings
**/
export declare class CustomerSettingsResponse extends SpeakeasyBase {
    homeRoomParentId?: number;
    homeRoomParentName?: string;
    homeRoomQuota?: number;
    homeRoomsActive: boolean;
}
