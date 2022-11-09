import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerSettingsRequest
/** 
 * Request model for setting the customer settings
**/
export class CustomerSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=homeRoomParentName" })
  homeRoomParentName?: string;

  @Metadata({ data: "json, name=homeRoomQuota" })
  homeRoomQuota?: number;

  @Metadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive?: boolean;
}
