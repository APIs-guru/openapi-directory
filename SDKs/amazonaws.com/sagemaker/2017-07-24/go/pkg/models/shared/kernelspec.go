package shared

// KernelSpec
// The specification of a Jupyter kernel.
type KernelSpec struct {
	DisplayName *string `json:"DisplayName,omitempty"`
	Name        string  `json:"Name"`
}
