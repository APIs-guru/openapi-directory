import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutGeofenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
