package shared

type ProjectMembershipResponseWriteAccessEnum string

const (
	ProjectMembershipResponseWriteAccessEnumFullWrite   ProjectMembershipResponseWriteAccessEnum = "full_write"
	ProjectMembershipResponseWriteAccessEnumCommentOnly ProjectMembershipResponseWriteAccessEnum = "comment_only"
)

type ProjectMembershipResponse struct {
	Gid          *string                                   `json:"gid,omitempty"`
	Project      *ProjectCompact                           `json:"project,omitempty"`
	ResourceType *string                                   `json:"resource_type,omitempty"`
	User         *UserCompact                              `json:"user,omitempty"`
	WriteAccess  *ProjectMembershipResponseWriteAccessEnum `json:"write_access,omitempty"`
}
