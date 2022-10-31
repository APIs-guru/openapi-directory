package shared



type SQLInjectionMatchSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    SQLInjectionMatchTuple SQLInjectionMatchTuple `json:"SqlInjectionMatchTuple"`
    
}

