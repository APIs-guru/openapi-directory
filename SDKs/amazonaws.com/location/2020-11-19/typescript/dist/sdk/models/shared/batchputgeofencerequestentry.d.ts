import { SpeakeasyBase } from "../../../internal/utils";
import { GeofenceGeometry } from "./geofencegeometry";
/**
 * Contains geofence geometry details.
**/
export declare class BatchPutGeofenceRequestEntry extends SpeakeasyBase {
    geofenceId: string;
    geometry: GeofenceGeometry;
}
