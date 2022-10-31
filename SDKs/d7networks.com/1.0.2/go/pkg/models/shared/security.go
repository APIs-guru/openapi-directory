package shared

type SchemeAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	Auth SchemeAuth `security:"scheme,type=http,subtype=basic"`
}
