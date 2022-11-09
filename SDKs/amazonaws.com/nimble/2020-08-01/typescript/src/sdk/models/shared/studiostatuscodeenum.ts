

export enum StudioStatusCodeEnum {
    StudioCreated = "STUDIO_CREATED"
,    StudioDeleted = "STUDIO_DELETED"
,    StudioUpdated = "STUDIO_UPDATED"
,    StudioCreateInProgress = "STUDIO_CREATE_IN_PROGRESS"
,    StudioUpdateInProgress = "STUDIO_UPDATE_IN_PROGRESS"
,    StudioDeleteInProgress = "STUDIO_DELETE_IN_PROGRESS"
,    StudioWithLaunchProfilesNotDeleted = "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED"
,    StudioWithStudioComponentsNotDeleted = "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED"
,    StudioWithStreamingImagesNotDeleted = "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED"
,    AwsSsoNotEnabled = "AWS_SSO_NOT_ENABLED"
,    AwsSsoAccessDenied = "AWS_SSO_ACCESS_DENIED"
,    RoleNotOwnedByStudioOwner = "ROLE_NOT_OWNED_BY_STUDIO_OWNER"
,    RoleCouldNotBeAssumed = "ROLE_COULD_NOT_BE_ASSUMED"
,    InternalError = "INTERNAL_ERROR"
,    EncryptionKeyNotFound = "ENCRYPTION_KEY_NOT_FOUND"
,    EncryptionKeyAccessDenied = "ENCRYPTION_KEY_ACCESS_DENIED"
,    AwsSsoConfigurationRepaired = "AWS_SSO_CONFIGURATION_REPAIRED"
,    AwsSsoConfigurationRepairInProgress = "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS"
}
