import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeofenceGeometry } from "./geofencegeometry";



export class GetGeofenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry: GeofenceGeometry;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
