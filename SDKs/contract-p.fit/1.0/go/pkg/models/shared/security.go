package shared

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeToken struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	Basic *SchemeBasic `security:"scheme,type=http,subtype=basic"`
	Token *SchemeToken `security:"scheme,type=apiKey,subtype=header"`
}
