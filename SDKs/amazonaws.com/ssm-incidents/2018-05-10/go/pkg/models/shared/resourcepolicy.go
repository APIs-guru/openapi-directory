package shared

// ResourcePolicy
// The resource policy that allows Incident Manager to perform actions on resources on your behalf.
type ResourcePolicy struct {
	PolicyDocument         string `json:"policyDocument"`
	PolicyID               string `json:"policyId"`
	RAMResourceShareRegion string `json:"ramResourceShareRegion"`
}
