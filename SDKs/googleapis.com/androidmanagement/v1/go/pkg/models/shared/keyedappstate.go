package shared

type KeyedAppStateSeverityEnum string

const (
	KeyedAppStateSeverityEnumSeverityUnspecified KeyedAppStateSeverityEnum = "SEVERITY_UNSPECIFIED"
	KeyedAppStateSeverityEnumInfo                KeyedAppStateSeverityEnum = "INFO"
	KeyedAppStateSeverityEnumError               KeyedAppStateSeverityEnum = "ERROR"
)

type KeyedAppState struct {
	CreateTime     *string                    `json:"createTime"`
	Data           *string                    `json:"data"`
	Key            *string                    `json:"key"`
	LastUpdateTime *string                    `json:"lastUpdateTime"`
	Message        *string                    `json:"message"`
	Severity       *KeyedAppStateSeverityEnum `json:"severity"`
}
