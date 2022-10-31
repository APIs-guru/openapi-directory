package shared

type GeoMatchConstraint struct {
	Type  GeoMatchConstraintTypeEnum  `json:"Type"`
	Value GeoMatchConstraintValueEnum `json:"Value"`
}
