package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeApplicationID struct {
	APIKey string `security:"name=x-apideck-app-id"`
}

type SchemeConsumerID struct {
	APIKey string `security:"name=x-apideck-consumer-id"`
}

type Security struct {
	ApplicationID SchemeApplicationID `security:"scheme,type=apiKey,subtype=header"`
	ConsumerID    SchemeConsumerID    `security:"scheme,type=apiKey,subtype=header"`
	APIKey        SchemeAPIKey        `security:"scheme,type=apiKey,subtype=header"`
}
