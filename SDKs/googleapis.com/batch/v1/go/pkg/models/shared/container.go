package shared

// Container
// Container runnable.
type Container struct {
	BlockExternalNetwork *bool    `json:"blockExternalNetwork,omitempty"`
	Commands             []string `json:"commands,omitempty"`
	Entrypoint           *string  `json:"entrypoint,omitempty"`
	ImageURI             *string  `json:"imageUri,omitempty"`
	Options              *string  `json:"options,omitempty"`
	Password             *string  `json:"password,omitempty"`
	Username             *string  `json:"username,omitempty"`
	Volumes              []string `json:"volumes,omitempty"`
}
