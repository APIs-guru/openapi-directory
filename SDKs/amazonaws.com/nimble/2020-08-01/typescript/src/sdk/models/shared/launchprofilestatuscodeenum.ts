


export enum LaunchProfileStatusCodeEnum {
    LaunchProfileCreated = "LAUNCH_PROFILE_CREATED",
    LaunchProfileUpdated = "LAUNCH_PROFILE_UPDATED",
    LaunchProfileDeleted = "LAUNCH_PROFILE_DELETED",
    LaunchProfileCreateInProgress = "LAUNCH_PROFILE_CREATE_IN_PROGRESS",
    LaunchProfileUpdateInProgress = "LAUNCH_PROFILE_UPDATE_IN_PROGRESS",
    LaunchProfileDeleteInProgress = "LAUNCH_PROFILE_DELETE_IN_PROGRESS",
    InternalError = "INTERNAL_ERROR",
    StreamingImageNotFound = "STREAMING_IMAGE_NOT_FOUND",
    StreamingImageNotReady = "STREAMING_IMAGE_NOT_READY",
    LaunchProfileWithStreamSessionsNotDeleted = "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED",
    EncryptionKeyAccessDenied = "ENCRYPTION_KEY_ACCESS_DENIED",
    EncryptionKeyNotFound = "ENCRYPTION_KEY_NOT_FOUND",
    InvalidSubnetsProvided = "INVALID_SUBNETS_PROVIDED"
}
