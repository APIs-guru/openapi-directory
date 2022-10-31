package shared



type GeoMatchSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    GeoMatchConstraint GeoMatchConstraint `json:"GeoMatchConstraint"`
    
}

