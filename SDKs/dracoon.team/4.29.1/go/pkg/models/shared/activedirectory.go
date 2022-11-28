package shared

// ActiveDirectory
// Active Directory information
type ActiveDirectory struct {
	Alias             string `json:"alias"`
	ID                int32  `json:"id"`
	IsGlobalAvailable bool   `json:"isGlobalAvailable"`
}
