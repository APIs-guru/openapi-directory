package shared

type Entitlement struct {
	AllowCheckIn *bool               `json:"AllowCheckIn"`
	MaxCount     *int64              `json:"MaxCount"`
	Name         string              `json:"Name"`
	Overage      *bool               `json:"Overage"`
	Unit         EntitlementUnitEnum `json:"Unit"`
	Value        *string             `json:"Value"`
}
