package shared

// GoogleCloudApigeeV1Operation
// Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
type GoogleCloudApigeeV1Operation struct {
	Methods  []string `json:"methods,omitempty"`
	Resource *string  `json:"resource,omitempty"`
}
