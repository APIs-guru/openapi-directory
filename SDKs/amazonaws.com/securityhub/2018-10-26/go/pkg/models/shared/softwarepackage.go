package shared

type SoftwarePackage struct {
	Architecture   *string `json:"Architecture"`
	Epoch          *string `json:"Epoch"`
	FilePath       *string `json:"FilePath"`
	Name           *string `json:"Name"`
	PackageManager *string `json:"PackageManager"`
	Release        *string `json:"Release"`
	Version        *string `json:"Version"`
}
