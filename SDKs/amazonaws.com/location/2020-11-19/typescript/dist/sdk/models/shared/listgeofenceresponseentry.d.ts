import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GeofenceGeometry } from "./geofencegeometry";
/**
 * Contains a list of geofences stored in a given geofence collection.
**/
export declare class ListGeofenceResponseEntry extends SpeakeasyBase {
    createTime: Date;
    geofenceId: string;
    geometry: GeofenceGeometry;
    status: string;
    updateTime: Date;
}
