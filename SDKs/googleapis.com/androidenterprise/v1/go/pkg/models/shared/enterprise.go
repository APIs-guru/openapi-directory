package shared

type Enterprise struct {
	Administrator []Administrator `json:"administrator"`
	ID            *string         `json:"id"`
	Name          *string         `json:"name"`
	PrimaryDomain *string         `json:"primaryDomain"`
}
