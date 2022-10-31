package shared




type SystemUpdateTypeEnum string

const (
    SystemUpdateTypeEnumSystemUpdateTypeUnspecified SystemUpdateTypeEnum = "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
SystemUpdateTypeEnumAutomatic SystemUpdateTypeEnum = "AUTOMATIC"
SystemUpdateTypeEnumWindowed SystemUpdateTypeEnum = "WINDOWED"
SystemUpdateTypeEnumPostpone SystemUpdateTypeEnum = "POSTPONE"
)


type SystemUpdate struct {
    EndMinutes *int32 `json:"endMinutes,omitempty"`
    FreezePeriods []FreezePeriod `json:"freezePeriods,omitempty"`
    StartMinutes *int32 `json:"startMinutes,omitempty"`
    Type *SystemUpdateTypeEnum `json:"type,omitempty"`
    
}

