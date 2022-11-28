package shared

// DeviceGroup
// LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
type DeviceGroup struct {
	DeviceSelectors []DeviceSelector `json:"deviceSelectors,omitempty"`
	Name            *string          `json:"name,omitempty"`
}
