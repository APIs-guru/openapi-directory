package shared




type DocumentDimensionsUnitEnum string

const (
    DocumentDimensionsUnitEnumDocumentDimensionUnitUnspecified DocumentDimensionsUnitEnum = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED"
DocumentDimensionsUnitEnumInch DocumentDimensionsUnitEnum = "INCH"
DocumentDimensionsUnitEnumCentimeter DocumentDimensionsUnitEnum = "CENTIMETER"
DocumentDimensionsUnitEnumPoint DocumentDimensionsUnitEnum = "POINT"
)


type DocumentDimensions struct {
    Height *float32 `json:"height,omitempty"`
    Unit *DocumentDimensionsUnitEnum `json:"unit,omitempty"`
    Width *float32 `json:"width,omitempty"`
    
}

