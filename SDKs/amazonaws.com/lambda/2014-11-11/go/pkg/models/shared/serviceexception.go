package shared

type ServiceException struct {
	Message *string `json:"Message"`
	Type    *string `json:"Type"`
}
