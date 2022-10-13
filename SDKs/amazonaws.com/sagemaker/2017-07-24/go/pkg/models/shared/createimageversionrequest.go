package shared

type CreateImageVersionRequest struct {
	BaseImage   string `json:"BaseImage"`
	ClientToken string `json:"ClientToken"`
	ImageName   string `json:"ImageName"`
}
