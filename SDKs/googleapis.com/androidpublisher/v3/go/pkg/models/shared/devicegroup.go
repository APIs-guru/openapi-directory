package shared

type DeviceGroup struct {
	DeviceSelectors []DeviceSelector `json:"deviceSelectors"`
	Name            *string          `json:"name"`
}
