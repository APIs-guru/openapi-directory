import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerSettingsRequest
/** 
 * Request model for setting the customer settings
**/
export class CustomerSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homeRoomParentName" })
  homeRoomParentName?: string;

  @SpeakeasyMetadata({ data: "json, name=homeRoomQuota" })
  homeRoomQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive?: boolean;
}
