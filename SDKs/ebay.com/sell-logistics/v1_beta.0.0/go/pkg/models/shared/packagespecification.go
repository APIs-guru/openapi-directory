package shared

type PackageSpecification struct {
	Dimensions *Dimensions `json:"dimensions"`
	Weight     *Weight     `json:"weight"`
}
