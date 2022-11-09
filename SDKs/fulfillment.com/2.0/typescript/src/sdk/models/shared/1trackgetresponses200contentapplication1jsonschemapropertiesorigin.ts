import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry } from "./1trackgetresponses200contentapplication1jsonschemapropertiesoriginpropertiesgeometry";

export enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum {
    Point = "Point"
,    LineString = "LineString"
,    Polygon = "Polygon"
,    MultiPoint = "MultiPoint"
,    MultiLineString = "MultiLineString"
,    MultiPolygon = "MultiPolygon"
}


// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
/** 
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
export class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates: any;

  @Metadata({ data: "json, name=type" })
  type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum;
}


export class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum {
    Feature = "Feature"
}


// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
/** 
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
export class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin extends SpeakeasyBase {
  @Metadata({ data: "json, name=bbox" })
  bbox?: any[];

  @Metadata({ data: "json, name=centerline" })
  centerline?: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;

  @Metadata({ data: "json, name=geometry" })
  geometry: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=properties" })
  properties: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum;
}
