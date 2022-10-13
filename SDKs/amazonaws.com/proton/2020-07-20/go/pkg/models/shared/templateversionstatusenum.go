package shared

type TemplateVersionStatusEnum string

const (
	TemplateVersionStatusEnumRegistrationInProgress TemplateVersionStatusEnum = "REGISTRATION_IN_PROGRESS"
	TemplateVersionStatusEnumRegistrationFailed     TemplateVersionStatusEnum = "REGISTRATION_FAILED"
	TemplateVersionStatusEnumDraft                  TemplateVersionStatusEnum = "DRAFT"
	TemplateVersionStatusEnumPublished              TemplateVersionStatusEnum = "PUBLISHED"
)
