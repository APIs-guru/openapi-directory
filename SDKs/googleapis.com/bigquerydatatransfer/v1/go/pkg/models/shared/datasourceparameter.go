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

// DataSourceParameter
// A parameter used to define custom fields in a data source definition.
type DataSourceParameter struct {
	AllowedValues         []string                     `json:"allowedValues,omitempty"`
	Deprecated            *bool                        `json:"deprecated,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	DisplayName           *string                      `json:"displayName,omitempty"`
	Fields                []DataSourceParameter        `json:"fields,omitempty"`
	Immutable             *bool                        `json:"immutable,omitempty"`
	MaxValue              *float64                     `json:"maxValue,omitempty"`
	MinValue              *float64                     `json:"minValue,omitempty"`
	ParamID               *string                      `json:"paramId,omitempty"`
	Recurse               *bool                        `json:"recurse,omitempty"`
	Repeated              *bool                        `json:"repeated,omitempty"`
	Required              *bool                        `json:"required,omitempty"`
	Type                  *DataSourceParameterTypeEnum `json:"type,omitempty"`
	ValidationDescription *string                      `json:"validationDescription,omitempty"`
	ValidationHelpURL     *string                      `json:"validationHelpUrl,omitempty"`
	ValidationRegex       *string                      `json:"validationRegex,omitempty"`
}
