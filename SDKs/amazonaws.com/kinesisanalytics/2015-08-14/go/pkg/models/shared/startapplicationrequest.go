package shared



type StartApplicationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    InputConfigurations []InputConfiguration `json:"InputConfigurations"`
    
}

