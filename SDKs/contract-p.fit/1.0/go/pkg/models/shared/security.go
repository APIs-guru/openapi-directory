package shared

type SchemeBasic struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeToken struct {
	APIKey string `security:"name=Authorization"`
}

type SecurityOption1 struct {
	Basic SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type SecurityOption2 struct {
	Token SchemeToken `security:"scheme,type=apiKey,subtype=header"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
}
