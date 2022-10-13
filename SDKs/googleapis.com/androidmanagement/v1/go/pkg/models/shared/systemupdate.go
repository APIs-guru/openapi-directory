package shared

type SystemUpdateTypeEnum string

const (
	SystemUpdateTypeEnumSystemUpdateTypeUnspecified SystemUpdateTypeEnum = "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
	SystemUpdateTypeEnumAutomatic                   SystemUpdateTypeEnum = "AUTOMATIC"
	SystemUpdateTypeEnumWindowed                    SystemUpdateTypeEnum = "WINDOWED"
	SystemUpdateTypeEnumPostpone                    SystemUpdateTypeEnum = "POSTPONE"
)

type SystemUpdate struct {
	EndMinutes    *int32                `json:"endMinutes"`
	FreezePeriods []FreezePeriod        `json:"freezePeriods"`
	StartMinutes  *int32                `json:"startMinutes"`
	Type          *SystemUpdateTypeEnum `json:"type"`
}
