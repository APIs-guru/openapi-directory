package shared




type DisplayStateEnum string

const (
    DisplayStateEnumDisplayStateUnspecified DisplayStateEnum = "DISPLAY_STATE_UNSPECIFIED"
DisplayStateEnumOff DisplayStateEnum = "OFF"
DisplayStateEnumOn DisplayStateEnum = "ON"
DisplayStateEnumDoze DisplayStateEnum = "DOZE"
DisplayStateEnumSuspended DisplayStateEnum = "SUSPENDED"
)


type Display struct {
    Density *int32 `json:"density,omitempty"`
    DisplayID *int32 `json:"displayId,omitempty"`
    Height *int32 `json:"height,omitempty"`
    Name *string `json:"name,omitempty"`
    RefreshRate *int32 `json:"refreshRate,omitempty"`
    State *DisplayStateEnum `json:"state,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

