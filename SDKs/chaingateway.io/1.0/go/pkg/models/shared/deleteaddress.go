package shared



type DeleteAddress struct {
    Deleted bool `json:"deleted"`
    Ethereumaddress string `json:"ethereumaddress"`
    Ok bool `json:"ok"`
    
}

