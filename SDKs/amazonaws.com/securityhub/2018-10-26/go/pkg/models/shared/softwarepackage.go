package shared

// SoftwarePackage
// Information about a software package.
type SoftwarePackage struct {
	Architecture   *string `json:"Architecture,omitempty"`
	Epoch          *string `json:"Epoch,omitempty"`
	FilePath       *string `json:"FilePath,omitempty"`
	Name           *string `json:"Name,omitempty"`
	PackageManager *string `json:"PackageManager,omitempty"`
	Release        *string `json:"Release,omitempty"`
	Version        *string `json:"Version,omitempty"`
}
