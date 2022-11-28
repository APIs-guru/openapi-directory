package shared

// Volume
// Volume describes a volume and parameters for it to be mounted to a VM.
type Volume struct {
	DeviceName   *string  `json:"deviceName,omitempty"`
	Gcs          *Gcs     `json:"gcs,omitempty"`
	MountOptions []string `json:"mountOptions,omitempty"`
	MountPath    *string  `json:"mountPath,omitempty"`
	Nfs          *Nfs     `json:"nfs,omitempty"`
}
