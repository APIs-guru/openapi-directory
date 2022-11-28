package shared

// TaggedResource
// A tag and its associated resource.
type TaggedResource struct {
	ResourceName *string
	ResourceType *string
	Tag          *Tag
}
