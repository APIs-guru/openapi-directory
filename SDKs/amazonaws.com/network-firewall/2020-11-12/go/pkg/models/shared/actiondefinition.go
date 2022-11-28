package shared

// ActionDefinition
// A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
type ActionDefinition struct {
	PublishMetricAction *PublishMetricAction `json:"PublishMetricAction,omitempty"`
}
