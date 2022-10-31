package shared



type ByteMatchSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    ByteMatchTuple ByteMatchTuple `json:"ByteMatchTuple"`
    
}

