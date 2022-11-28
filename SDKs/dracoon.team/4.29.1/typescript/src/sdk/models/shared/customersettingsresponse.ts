import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerSettingsResponse
/** 
 * Customer settings
**/
export class CustomerSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homeRoomParentId" })
  homeRoomParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=homeRoomParentName" })
  homeRoomParentName?: string;

  @SpeakeasyMetadata({ data: "json, name=homeRoomQuota" })
  homeRoomQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive: boolean;
}
