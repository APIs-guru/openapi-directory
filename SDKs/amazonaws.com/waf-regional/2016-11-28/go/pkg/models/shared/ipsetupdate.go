package shared



type IPSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    IPSetDescriptor IPSetDescriptor `json:"IPSetDescriptor"`
    
}

