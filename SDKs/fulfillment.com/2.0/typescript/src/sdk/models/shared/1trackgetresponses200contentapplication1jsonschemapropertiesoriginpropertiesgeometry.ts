import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum {
    Point = "Point"
,    LineString = "LineString"
,    Polygon = "Polygon"
,    MultiPoint = "MultiPoint"
,    MultiLineString = "MultiLineString"
,    MultiPolygon = "MultiPolygon"
}


// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry
/** 
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates: any;

  @Metadata({ data: "json, name=type" })
  type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum;
}
