package shared

type AccountDetail struct {
	Addons      []Addon      `json:"addons"`
	ID          *int32       `json:"id"`
	Identifier  *string      `json:"identifier"`
	Servicepack *Servicepack `json:"servicepack"`
}
