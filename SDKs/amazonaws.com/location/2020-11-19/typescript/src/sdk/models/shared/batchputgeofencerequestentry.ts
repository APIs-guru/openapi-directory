import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeofenceGeometry } from "./geofencegeometry";



// BatchPutGeofenceRequestEntry
/** 
 * Contains geofence geometry details. 
**/
export class BatchPutGeofenceRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;

  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry: GeofenceGeometry;
}
