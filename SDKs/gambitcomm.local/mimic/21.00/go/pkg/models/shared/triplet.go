package shared

type Triplet struct {
	Device   *string `json:"device"`
	Mib      *string `json:"mib"`
	Scenario *int32  `json:"scenario"`
}
