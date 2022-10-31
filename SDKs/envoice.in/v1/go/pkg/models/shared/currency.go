package shared



type Currency struct {
    Code *string `json:"Code,omitempty" form:"name=Code"`
    ID *int32 `json:"Id,omitempty" form:"name=Id"`
    Name *string `json:"Name,omitempty" form:"name=Name"`
    Symbol *string `json:"Symbol,omitempty" form:"name=Symbol"`
    Value *string `json:"Value,omitempty" form:"name=Value"`
    
}

