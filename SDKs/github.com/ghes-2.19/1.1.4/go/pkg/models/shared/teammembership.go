package shared




type TeamMembershipRoleEnum string

const (
    TeamMembershipRoleEnumMember TeamMembershipRoleEnum = "member"
TeamMembershipRoleEnumMaintainer TeamMembershipRoleEnum = "maintainer"
)



type TeamMembershipStateEnum string

const (
    TeamMembershipStateEnumActive TeamMembershipStateEnum = "active"
TeamMembershipStateEnumPending TeamMembershipStateEnum = "pending"
)


type TeamMembership struct {
    Role TeamMembershipRoleEnum `json:"role"`
    State TeamMembershipStateEnum `json:"state"`
    URL string `json:"url"`
    
}

