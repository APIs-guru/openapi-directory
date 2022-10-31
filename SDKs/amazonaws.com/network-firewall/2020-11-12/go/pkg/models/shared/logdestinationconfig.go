package shared

type LogDestinationConfig struct {
	LogDestination     map[string]string      `json:"LogDestination"`
	LogDestinationType LogDestinationTypeEnum `json:"LogDestinationType"`
	LogType            LogTypeEnum            `json:"LogType"`
}
