package shared

// DestinyResponsesDestinyErrorProfileInfoCard
// Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
type DestinyResponsesDestinyErrorProfileInfoCard struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyResponsesDestinyErrorProfile
// If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
// Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
type DestinyResponsesDestinyErrorProfile struct {
	ErrorCode *int32
	InfoCard  *DestinyResponsesDestinyErrorProfileInfoCard
}
