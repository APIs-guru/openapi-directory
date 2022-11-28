import { SpeakeasyBase } from "../../../internal/utils";
import { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry } from "./onetrackgetresponses200contentapplication1jsonschemapropertiesoriginpropertiesgeometry";
export declare enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum {
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
export declare class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry extends SpeakeasyBase {
    coordinates: any;
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum;
}
export declare class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties extends SpeakeasyBase {
    name?: string;
}
export declare enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum {
    Feature = "Feature"
}
/**
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
export declare class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin extends SpeakeasyBase {
    bbox?: any[];
    centerline?: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;
    geometry: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry;
    id?: number;
    properties: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties;
    title?: string;
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum;
}
