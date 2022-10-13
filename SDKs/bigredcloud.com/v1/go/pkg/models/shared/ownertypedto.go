package shared

type OwnerTypeDto struct {
	Description      *string `json:"description"`
	ID               *int64  `json:"id"`
	OwnerTypeGroupID *int64  `json:"ownerTypeGroupId"`
}
