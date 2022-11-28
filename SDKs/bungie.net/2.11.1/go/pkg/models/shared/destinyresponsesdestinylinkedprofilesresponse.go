package shared

// DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
// If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.
// I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
type DestinyResponsesDestinyLinkedProfilesResponseBnetMembership struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyResponsesDestinyLinkedProfilesResponse
// I know what you seek. You seek linked accounts. Found them, you have.
// This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
type DestinyResponsesDestinyLinkedProfilesResponse struct {
	BnetMembership     *DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
	Profiles           []DestinyResponsesDestinyProfileUserInfoCard
	ProfilesWithErrors []DestinyResponsesDestinyErrorProfile
}
