package shared

type OptIn1 struct {
	Opencast       bool `json:"opencast"`
	PreviewChannel bool `json:"preview_channel"`
	RemoteDucking  bool `json:"remote_ducking"`
	Stats          bool `json:"stats"`
}
