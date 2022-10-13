package shared

type IErrorInfo struct {
	Code               *string `json:"Code"`
	FaultMessage       *string `json:"FaultMessage"`
	Group              *string `json:"Group"`
	UserVisibleMessage *string `json:"UserVisibleMessage"`
}
