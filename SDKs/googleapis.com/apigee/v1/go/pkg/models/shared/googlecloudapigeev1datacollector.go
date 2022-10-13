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

type GoogleCloudApigeeV1DataCollector struct {
	CreatedAt      *string                                   `json:"createdAt"`
	Description    *string                                   `json:"description"`
	LastModifiedAt *string                                   `json:"lastModifiedAt"`
	Name           *string                                   `json:"name"`
	Type           *GoogleCloudApigeeV1DataCollectorTypeEnum `json:"type"`
}
