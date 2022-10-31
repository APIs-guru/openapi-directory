package shared



type SchemeBasic struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    Basic SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

