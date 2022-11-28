package shared

type GoogleCloudApigeeV1DataCollectorTypeEnum string

const (
	GoogleCloudApigeeV1DataCollectorTypeEnumTypeUnspecified GoogleCloudApigeeV1DataCollectorTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1DataCollectorTypeEnumInteger         GoogleCloudApigeeV1DataCollectorTypeEnum = "INTEGER"
	GoogleCloudApigeeV1DataCollectorTypeEnumFloat           GoogleCloudApigeeV1DataCollectorTypeEnum = "FLOAT"
	GoogleCloudApigeeV1DataCollectorTypeEnumString          GoogleCloudApigeeV1DataCollectorTypeEnum = "STRING"
	GoogleCloudApigeeV1DataCollectorTypeEnumBoolean         GoogleCloudApigeeV1DataCollectorTypeEnum = "BOOLEAN"
	GoogleCloudApigeeV1DataCollectorTypeEnumDatetime        GoogleCloudApigeeV1DataCollectorTypeEnum = "DATETIME"
)

// GoogleCloudApigeeV1DataCollector
// Data collector configuration.
type GoogleCloudApigeeV1DataCollector struct {
	CreatedAt      *string                                   `json:"createdAt,omitempty"`
	Description    *string                                   `json:"description,omitempty"`
	LastModifiedAt *string                                   `json:"lastModifiedAt,omitempty"`
	Name           *string                                   `json:"name,omitempty"`
	Type           *GoogleCloudApigeeV1DataCollectorTypeEnum `json:"type,omitempty"`
}

// GoogleCloudApigeeV1DataCollectorInput
// Data collector configuration.
type GoogleCloudApigeeV1DataCollectorInput struct {
	Description *string                                   `json:"description,omitempty"`
	Name        *string                                   `json:"name,omitempty"`
	Type        *GoogleCloudApigeeV1DataCollectorTypeEnum `json:"type,omitempty"`
}
