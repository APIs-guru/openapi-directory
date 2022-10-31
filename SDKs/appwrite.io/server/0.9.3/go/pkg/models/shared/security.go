package shared



type SchemeJwt struct {
    APIKey string `security:"name=X-Appwrite-JWT"`
    
}

type SchemeKey struct {
    APIKey string `security:"name=X-Appwrite-Key"`
    
}

type SchemeLocale struct {
    APIKey string `security:"name=X-Appwrite-Locale"`
    
}

type SchemeProject struct {
    APIKey string `security:"name=X-Appwrite-Project"`
    
}

