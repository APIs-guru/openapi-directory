package shared

type AssociateEntityToThingRequest struct {
	EntityID         string `json:"entityId"`
	NamespaceVersion *int64 `json:"namespaceVersion,omitempty"`
	ThingName        string `json:"thingName"`
}
