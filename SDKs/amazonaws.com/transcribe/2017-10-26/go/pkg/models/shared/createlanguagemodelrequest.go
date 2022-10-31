package shared



type CreateLanguageModelRequest struct {
    BaseModelName BaseModelNameEnum `json:"BaseModelName"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    LanguageCode ClmLanguageCodeEnum `json:"LanguageCode"`
    ModelName string `json:"ModelName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

