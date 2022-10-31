package shared



type RulesSourceList struct {
    GeneratedRulesType GeneratedRulesTypeEnum `json:"GeneratedRulesType"`
    TargetTypes []TargetTypeEnum `json:"TargetTypes"`
    Targets []string `json:"Targets"`
    
}

