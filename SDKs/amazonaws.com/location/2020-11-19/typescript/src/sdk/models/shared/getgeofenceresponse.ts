import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeofenceGeometry } from "./geofencegeometry";


export class GetGeofenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @Metadata({ data: "json, name=Geometry" })
  geometry: GeofenceGeometry;

  @Metadata({ data: "json, name=Status" })
  status: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
