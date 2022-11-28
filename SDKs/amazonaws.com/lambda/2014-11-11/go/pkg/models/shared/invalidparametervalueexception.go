package shared

// InvalidParameterValueException
// One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.
type InvalidParameterValueException struct {
	Type    *string `json:"Type,omitempty"`
	Message *string `json:"message,omitempty"`
}
