package shared

// MembershipList
// Memberships List
type MembershipList struct {
	Memberships []Membership `json:"memberships"`
	Sum         int32        `json:"sum"`
}
