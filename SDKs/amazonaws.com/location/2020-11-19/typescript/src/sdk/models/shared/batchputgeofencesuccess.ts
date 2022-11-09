import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchPutGeofenceSuccess
/** 
 * Contains a summary of each geofence that was successfully stored in a given geofence collection.
**/
export class BatchPutGeofenceSuccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
