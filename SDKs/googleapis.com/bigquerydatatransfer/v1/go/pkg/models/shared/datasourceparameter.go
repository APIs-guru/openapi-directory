package shared

type DataSourceParameterTypeEnum string

const (
	DataSourceParameterTypeEnumTypeUnspecified DataSourceParameterTypeEnum = "TYPE_UNSPECIFIED"
	DataSourceParameterTypeEnumString          DataSourceParameterTypeEnum = "STRING"
	DataSourceParameterTypeEnumInteger         DataSourceParameterTypeEnum = "INTEGER"
	DataSourceParameterTypeEnumDouble          DataSourceParameterTypeEnum = "DOUBLE"
	DataSourceParameterTypeEnumBoolean         DataSourceParameterTypeEnum = "BOOLEAN"
	DataSourceParameterTypeEnumRecord          DataSourceParameterTypeEnum = "RECORD"
	DataSourceParameterTypeEnumPlusPage        DataSourceParameterTypeEnum = "PLUS_PAGE"
)

type DataSourceParameter struct {
	AllowedValues         []string                     `json:"allowedValues"`
	Deprecated            *bool                        `json:"deprecated"`
	Description           *string                      `json:"description"`
	DisplayName           *string                      `json:"displayName"`
	Fields                []DataSourceParameter        `json:"fields"`
	Immutable             *bool                        `json:"immutable"`
	MaxValue              *float64                     `json:"maxValue"`
	MinValue              *float64                     `json:"minValue"`
	ParamID               *string                      `json:"paramId"`
	Recurse               *bool                        `json:"recurse"`
	Repeated              *bool                        `json:"repeated"`
	Required              *bool                        `json:"required"`
	Type                  *DataSourceParameterTypeEnum `json:"type"`
	ValidationDescription *string                      `json:"validationDescription"`
	ValidationHelpURL     *string                      `json:"validationHelpUrl"`
	ValidationRegex       *string                      `json:"validationRegex"`
}
