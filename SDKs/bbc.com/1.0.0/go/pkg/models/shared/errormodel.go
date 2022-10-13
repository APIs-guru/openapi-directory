package shared

type ErrorModelFaultDetail struct {
	Errorcode *string `json:"errorcode"`
}

type ErrorModelFault struct {
	Detail      *ErrorModelFaultDetail `json:"detail"`
	FaultString *string                `json:"faultString"`
}

type ErrorModel struct {
	Fault *ErrorModelFault `json:"fault"`
}
