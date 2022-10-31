package shared



type SchemeXAuthKey struct {
    APIKey string `security:"name=x-auth-key"`
    
}

type SchemeXAuthSecret struct {
    APIKey string `security:"name=x-auth-secret"`
    
}

