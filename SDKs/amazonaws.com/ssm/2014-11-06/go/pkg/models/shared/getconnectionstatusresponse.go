package shared

type GetConnectionStatusResponse struct {
	Status *ConnectionStatusEnum `json:"Status"`
	Target *string               `json:"Target"`
}
