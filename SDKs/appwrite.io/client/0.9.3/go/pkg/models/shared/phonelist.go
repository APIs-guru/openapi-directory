package shared

type PhoneList struct {
	Phones []Phone `json:"phones"`
	Sum    int32   `json:"sum"`
}
