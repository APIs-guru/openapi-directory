package shared



type Predicate struct {
    DataID string `json:"DataId"`
    Negated bool `json:"Negated"`
    Type PredicateTypeEnum `json:"Type"`
    
}

