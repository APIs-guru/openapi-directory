package shared

type ProjectMembershipResponseWriteAccessEnum string

const (
	ProjectMembershipResponseWriteAccessEnumFullWrite   ProjectMembershipResponseWriteAccessEnum = "full_write"
	ProjectMembershipResponseWriteAccessEnumCommentOnly ProjectMembershipResponseWriteAccessEnum = "comment_only"
)

type ProjectMembershipResponse struct {
	Gid          *string                                   `json:"gid"`
	Project      *ProjectCompact                           `json:"project"`
	ResourceType *string                                   `json:"resource_type"`
	User         *UserCompact                              `json:"user"`
	WriteAccess  *ProjectMembershipResponseWriteAccessEnum `json:"write_access"`
}
