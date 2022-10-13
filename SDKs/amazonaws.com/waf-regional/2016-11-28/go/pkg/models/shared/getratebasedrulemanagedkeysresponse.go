package shared

type GetRateBasedRuleManagedKeysResponse struct {
	ManagedKeys []string `json:"ManagedKeys"`
	NextMarker  *string  `json:"NextMarker"`
}
