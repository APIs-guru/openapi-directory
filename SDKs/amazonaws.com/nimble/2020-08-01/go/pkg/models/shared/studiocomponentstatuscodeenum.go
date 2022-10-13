package shared

type StudioComponentStatusCodeEnum string

const (
	StudioComponentStatusCodeEnumActiveDirectoryAlreadyExists    StudioComponentStatusCodeEnum = "ACTIVE_DIRECTORY_ALREADY_EXISTS"
	StudioComponentStatusCodeEnumStudioComponentCreated          StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_CREATED"
	StudioComponentStatusCodeEnumStudioComponentUpdated          StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_UPDATED"
	StudioComponentStatusCodeEnumStudioComponentDeleted          StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_DELETED"
	StudioComponentStatusCodeEnumEncryptionKeyAccessDenied       StudioComponentStatusCodeEnum = "ENCRYPTION_KEY_ACCESS_DENIED"
	StudioComponentStatusCodeEnumEncryptionKeyNotFound           StudioComponentStatusCodeEnum = "ENCRYPTION_KEY_NOT_FOUND"
	StudioComponentStatusCodeEnumStudioComponentCreateInProgress StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_CREATE_IN_PROGRESS"
	StudioComponentStatusCodeEnumStudioComponentUpdateInProgress StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_UPDATE_IN_PROGRESS"
	StudioComponentStatusCodeEnumStudioComponentDeleteInProgress StudioComponentStatusCodeEnum = "STUDIO_COMPONENT_DELETE_IN_PROGRESS"
	StudioComponentStatusCodeEnumInternalError                   StudioComponentStatusCodeEnum = "INTERNAL_ERROR"
)
