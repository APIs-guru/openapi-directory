package shared

// AllocationPolicy
// A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
type AllocationPolicy struct {
	Instances      []InstancePolicyOrTemplate `json:"instances,omitempty"`
	Labels         map[string]string          `json:"labels,omitempty"`
	Location       *LocationPolicy            `json:"location,omitempty"`
	Network        *NetworkPolicy             `json:"network,omitempty"`
	ServiceAccount *ServiceAccount            `json:"serviceAccount,omitempty"`
}
