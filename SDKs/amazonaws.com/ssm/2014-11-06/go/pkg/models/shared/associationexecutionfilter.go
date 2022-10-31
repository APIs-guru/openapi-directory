package shared



type AssociationExecutionFilter struct {
    Key AssociationExecutionFilterKeyEnum `json:"Key"`
    Type AssociationFilterOperatorTypeEnum `json:"Type"`
    Value string `json:"Value"`
    
}

