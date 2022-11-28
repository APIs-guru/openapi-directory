package shared

// Thing
// An AWS IoT thing.
type Thing struct {
	ThingArn  *string `json:"thingArn,omitempty"`
	ThingName *string `json:"thingName,omitempty"`
}
