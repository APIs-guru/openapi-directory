import { SpeakeasyBase } from "../../../internal/utils";
import { GeofenceGeometry } from "./geofencegeometry";
export declare class GetGeofenceResponse extends SpeakeasyBase {
    createTime: Date;
    geofenceId: string;
    geometry: GeofenceGeometry;
    status: string;
    updateTime: Date;
}
