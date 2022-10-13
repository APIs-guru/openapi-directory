package shared

type BatchCreatePrintServersRequest struct {
	Requests []CreatePrintServerRequest `json:"requests"`
}
