package shared

type ErrorStatusEnum string

const (
	ErrorStatusEnumError ErrorStatusEnum = "error"
)

type Error struct {
	Error  string          `json:"error"`
	Status ErrorStatusEnum `json:"status"`
}
