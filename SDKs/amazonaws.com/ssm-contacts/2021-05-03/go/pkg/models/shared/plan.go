package shared

// Plan
// The stages that an escalation plan or engagement plan engages contacts and contact methods in.
type Plan struct {
	Stages []Stage `json:"Stages"`
}
