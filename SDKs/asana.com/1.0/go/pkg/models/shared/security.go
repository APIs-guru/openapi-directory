package shared



type SchemeOauth2 struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemePersonalAccessToken struct {
    Authorization string `security:"name=Authorization"`
    
}

type SecurityOption1 struct {
    PersonalAccessToken SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type SecurityOption2 struct {
    Oauth2 SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

