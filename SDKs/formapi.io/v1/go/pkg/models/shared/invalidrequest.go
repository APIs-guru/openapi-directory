package shared

type InvalidRequestStatusEnum string

const (
	InvalidRequestStatusEnumError InvalidRequestStatusEnum = "error"
)

type InvalidRequest struct {
	Errors []string                 `json:"errors"`
	Status InvalidRequestStatusEnum `json:"status"`
}
