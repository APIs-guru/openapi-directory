package shared

type PolicyDetails struct {
	Action *FindingAction `json:"action"`
	Actor  *FindingActor  `json:"actor"`
}
