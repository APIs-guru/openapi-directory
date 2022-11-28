package shared

type SchemeAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	Auth SchemeAuth `security:"scheme,type=http,subtype=basic"`
}
