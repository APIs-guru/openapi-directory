package shared

type SchemeBearerAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	BearerAuth SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}
