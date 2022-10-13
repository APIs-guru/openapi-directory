package shared

type DisplayStateEnum string

const (
	DisplayStateEnumDisplayStateUnspecified DisplayStateEnum = "DISPLAY_STATE_UNSPECIFIED"
	DisplayStateEnumOff                     DisplayStateEnum = "OFF"
	DisplayStateEnumOn                      DisplayStateEnum = "ON"
	DisplayStateEnumDoze                    DisplayStateEnum = "DOZE"
	DisplayStateEnumSuspended               DisplayStateEnum = "SUSPENDED"
)

type Display struct {
	Density     *int32            `json:"density"`
	DisplayID   *int32            `json:"displayId"`
	Height      *int32            `json:"height"`
	Name        *string           `json:"name"`
	RefreshRate *int32            `json:"refreshRate"`
	State       *DisplayStateEnum `json:"state"`
	Width       *int32            `json:"width"`
}
