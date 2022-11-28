import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchPutGeofenceSuccess
/** 
 * Contains a summary of each geofence that was successfully stored in a given geofence collection.
**/
export class BatchPutGeofenceSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
