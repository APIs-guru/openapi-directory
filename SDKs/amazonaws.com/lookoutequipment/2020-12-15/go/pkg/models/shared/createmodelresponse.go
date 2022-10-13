package shared

type CreateModelResponse struct {
	ModelArn *string          `json:"ModelArn"`
	Status   *ModelStatusEnum `json:"Status"`
}
