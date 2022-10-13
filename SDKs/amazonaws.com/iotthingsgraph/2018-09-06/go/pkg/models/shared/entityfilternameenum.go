package shared

type EntityFilterNameEnum string

const (
	EntityFilterNameEnumName               EntityFilterNameEnum = "NAME"
	EntityFilterNameEnumNamespace          EntityFilterNameEnum = "NAMESPACE"
	EntityFilterNameEnumSemanticTypePath   EntityFilterNameEnum = "SEMANTIC_TYPE_PATH"
	EntityFilterNameEnumReferencedEntityID EntityFilterNameEnum = "REFERENCED_ENTITY_ID"
)
