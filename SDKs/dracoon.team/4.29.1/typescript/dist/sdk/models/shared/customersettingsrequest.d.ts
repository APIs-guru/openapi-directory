import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for setting the customer settings
**/
export declare class CustomerSettingsRequest extends SpeakeasyBase {
    homeRoomParentName?: string;
    homeRoomQuota?: number;
    homeRoomsActive?: boolean;
}
