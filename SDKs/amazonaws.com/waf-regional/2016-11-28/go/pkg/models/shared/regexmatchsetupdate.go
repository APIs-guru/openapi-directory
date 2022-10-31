package shared



type RegexMatchSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    RegexMatchTuple RegexMatchTuple `json:"RegexMatchTuple"`
    
}

