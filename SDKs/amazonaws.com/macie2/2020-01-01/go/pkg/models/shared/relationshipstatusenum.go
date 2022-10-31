package shared




type RelationshipStatusEnum string

const (
    RelationshipStatusEnumEnabled RelationshipStatusEnum = "Enabled"
RelationshipStatusEnumPaused RelationshipStatusEnum = "Paused"
RelationshipStatusEnumInvited RelationshipStatusEnum = "Invited"
RelationshipStatusEnumCreated RelationshipStatusEnum = "Created"
RelationshipStatusEnumRemoved RelationshipStatusEnum = "Removed"
RelationshipStatusEnumResigned RelationshipStatusEnum = "Resigned"
RelationshipStatusEnumEmailVerificationInProgress RelationshipStatusEnum = "EmailVerificationInProgress"
RelationshipStatusEnumEmailVerificationFailed RelationshipStatusEnum = "EmailVerificationFailed"
RelationshipStatusEnumRegionDisabled RelationshipStatusEnum = "RegionDisabled"
RelationshipStatusEnumAccountSuspended RelationshipStatusEnum = "AccountSuspended"
)


