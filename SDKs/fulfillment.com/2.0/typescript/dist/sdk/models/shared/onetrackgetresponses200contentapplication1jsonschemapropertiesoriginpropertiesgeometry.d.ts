import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString",
    MultiPolygon = "MultiPolygon"
}
/**
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export declare class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry extends SpeakeasyBase {
    coordinates: any;
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum;
}
