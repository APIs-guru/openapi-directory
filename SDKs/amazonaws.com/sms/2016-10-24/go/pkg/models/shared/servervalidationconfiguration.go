package shared

type ServerValidationConfiguration struct {
	Name                         *string                       `json:"name"`
	Server                       *Server                       `json:"server"`
	ServerValidationStrategy     *ServerValidationStrategyEnum `json:"serverValidationStrategy"`
	UserDataValidationParameters *UserDataValidationParameters `json:"userDataValidationParameters"`
	ValidationID                 *string                       `json:"validationId"`
}
