package shared

type ChangeSummary struct {
	ChangeName      *string       `json:"ChangeName"`
	ChangeType      *string       `json:"ChangeType"`
	Details         *string       `json:"Details"`
	Entity          *Entity       `json:"Entity"`
	ErrorDetailList []ErrorDetail `json:"ErrorDetailList"`
}
