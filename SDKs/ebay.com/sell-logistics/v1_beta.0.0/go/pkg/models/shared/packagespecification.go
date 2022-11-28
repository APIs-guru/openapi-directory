package shared

// PackageSpecification
// This complex type specifies the dimensions and weight of a package.
type PackageSpecification struct {
	Dimensions *Dimensions `json:"dimensions,omitempty"`
	Weight     *Weight     `json:"weight,omitempty"`
}
