package shared



type TaxCreateAPIModel struct {
    Name *string `json:"Name,omitempty" form:"name=Name"`
    Percentage *float64 `json:"Percentage,omitempty" form:"name=Percentage"`
    
}

