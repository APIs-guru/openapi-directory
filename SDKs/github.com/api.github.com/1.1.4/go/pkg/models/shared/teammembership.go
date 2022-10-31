package shared

type TeamMembershipRoleEnum string

const (
	TeamMembershipRoleEnumMember     TeamMembershipRoleEnum = "member"
	TeamMembershipRoleEnumMaintainer TeamMembershipRoleEnum = "maintainer"
)

type TeamMembership struct {
	Role  TeamMembershipRoleEnum `json:"role"`
	State string                 `json:"state"`
	URL   string                 `json:"url"`
}
