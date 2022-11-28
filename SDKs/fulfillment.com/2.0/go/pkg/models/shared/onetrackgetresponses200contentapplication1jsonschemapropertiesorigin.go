package shared

type OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum string

const (
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumPoint           OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "Point"
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumLineString      OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "LineString"
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumPolygon         OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "Polygon"
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumMultiPoint      OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "MultiPoint"
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumMultiLineString OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "MultiLineString"
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnumMultiPolygon    OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = "MultiPolygon"
)

// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
// GeoJSon geometry
// http://geojson.org/geojson-spec.html#geometry-objects
type OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry struct {
	Coordinates interface{}                                                                          `json:"coordinates"`
	Type        OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum `json:"type"`
}

type OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties struct {
	Name *string `json:"name,omitempty"`
}

type OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum string

const (
	OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnumFeature OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum = "Feature"
)

// OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
// GeoJSon Feature
// https://tools.ietf.org/html/rfc7946#section-3.2
type OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin struct {
	Bbox       []interface{}                                                                           `json:"bbox,omitempty"`
	Centerline *OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry `json:"centerline,omitempty"`
	Geometry   OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry            `json:"geometry"`
	ID         *int64                                                                                  `json:"id,omitempty"`
	Properties OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties          `json:"properties"`
	Title      *string                                                                                 `json:"title,omitempty"`
	Type       OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum            `json:"type"`
}
