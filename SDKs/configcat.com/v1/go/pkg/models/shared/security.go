package shared

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	Basic SchemeBasic `security:"scheme,type=http,subtype=basic"`
}
