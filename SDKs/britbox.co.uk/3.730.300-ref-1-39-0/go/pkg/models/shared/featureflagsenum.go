package shared

type FeatureFlagsEnum string

const (
	FeatureFlagsEnumAll FeatureFlagsEnum = "all"
	FeatureFlagsEnumIdp FeatureFlagsEnum = "idp"
	FeatureFlagsEnumLdp FeatureFlagsEnum = "ldp"
	FeatureFlagsEnumHb  FeatureFlagsEnum = "hb"
	FeatureFlagsEnumRpt FeatureFlagsEnum = "rpt"
	FeatureFlagsEnumCas FeatureFlagsEnum = "cas"
	FeatureFlagsEnumLrl FeatureFlagsEnum = "lrl"
	FeatureFlagsEnumCd  FeatureFlagsEnum = "cd"
)
