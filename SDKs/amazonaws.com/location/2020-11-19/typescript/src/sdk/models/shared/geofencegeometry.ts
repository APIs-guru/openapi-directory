import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeofenceGeometry
/** 
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
export class GeofenceGeometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Polygon" })
  polygon?: number[][][];
}
