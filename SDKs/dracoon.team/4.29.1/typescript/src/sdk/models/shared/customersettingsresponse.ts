import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerSettingsResponse
/** 
 * Customer settings
**/
export class CustomerSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=homeRoomParentId" })
  homeRoomParentId?: number;

  @Metadata({ data: "json, name=homeRoomParentName" })
  homeRoomParentName?: string;

  @Metadata({ data: "json, name=homeRoomQuota" })
  homeRoomQuota?: number;

  @Metadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive: boolean;
}
