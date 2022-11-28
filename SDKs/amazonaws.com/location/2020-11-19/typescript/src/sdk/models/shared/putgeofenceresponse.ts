import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutGeofenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
