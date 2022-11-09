import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeofenceGeometry } from "./geofencegeometry";


// BatchPutGeofenceRequestEntry
/** 
 * Contains geofence geometry details. 
**/
export class BatchPutGeofenceRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @Metadata({ data: "json, name=Geometry" })
  geometry: GeofenceGeometry;
}
