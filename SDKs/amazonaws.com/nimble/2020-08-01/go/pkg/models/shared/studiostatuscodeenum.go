package shared

type StudioStatusCodeEnum string

const (
	StudioStatusCodeEnumStudioCreated                        StudioStatusCodeEnum = "STUDIO_CREATED"
	StudioStatusCodeEnumStudioDeleted                        StudioStatusCodeEnum = "STUDIO_DELETED"
	StudioStatusCodeEnumStudioUpdated                        StudioStatusCodeEnum = "STUDIO_UPDATED"
	StudioStatusCodeEnumStudioCreateInProgress               StudioStatusCodeEnum = "STUDIO_CREATE_IN_PROGRESS"
	StudioStatusCodeEnumStudioUpdateInProgress               StudioStatusCodeEnum = "STUDIO_UPDATE_IN_PROGRESS"
	StudioStatusCodeEnumStudioDeleteInProgress               StudioStatusCodeEnum = "STUDIO_DELETE_IN_PROGRESS"
	StudioStatusCodeEnumStudioWithLaunchProfilesNotDeleted   StudioStatusCodeEnum = "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED"
	StudioStatusCodeEnumStudioWithStudioComponentsNotDeleted StudioStatusCodeEnum = "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED"
	StudioStatusCodeEnumStudioWithStreamingImagesNotDeleted  StudioStatusCodeEnum = "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED"
	StudioStatusCodeEnumAwsSsoNotEnabled                     StudioStatusCodeEnum = "AWS_SSO_NOT_ENABLED"
	StudioStatusCodeEnumAwsSsoAccessDenied                   StudioStatusCodeEnum = "AWS_SSO_ACCESS_DENIED"
	StudioStatusCodeEnumRoleNotOwnedByStudioOwner            StudioStatusCodeEnum = "ROLE_NOT_OWNED_BY_STUDIO_OWNER"
	StudioStatusCodeEnumRoleCouldNotBeAssumed                StudioStatusCodeEnum = "ROLE_COULD_NOT_BE_ASSUMED"
	StudioStatusCodeEnumInternalError                        StudioStatusCodeEnum = "INTERNAL_ERROR"
	StudioStatusCodeEnumEncryptionKeyNotFound                StudioStatusCodeEnum = "ENCRYPTION_KEY_NOT_FOUND"
	StudioStatusCodeEnumEncryptionKeyAccessDenied            StudioStatusCodeEnum = "ENCRYPTION_KEY_ACCESS_DENIED"
	StudioStatusCodeEnumAwsSsoConfigurationRepaired          StudioStatusCodeEnum = "AWS_SSO_CONFIGURATION_REPAIRED"
	StudioStatusCodeEnumAwsSsoConfigurationRepairInProgress  StudioStatusCodeEnum = "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS"
)
