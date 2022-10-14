package shared

type ErrorModelFaultDetail struct {
	Errorcode *string `json:"errorcode,omitempty"`
}

type ErrorModelFault struct {
	Detail      *ErrorModelFaultDetail `json:"detail,omitempty"`
	FaultString *string                `json:"faultString,omitempty"`
}

type ErrorModel struct {
	Fault *ErrorModelFault `json:"fault,omitempty"`
}
