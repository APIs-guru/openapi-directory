package shared




type DocumentStatusEnum string

const (
    DocumentStatusEnumCreating DocumentStatusEnum = "Creating"
DocumentStatusEnumActive DocumentStatusEnum = "Active"
DocumentStatusEnumUpdating DocumentStatusEnum = "Updating"
DocumentStatusEnumDeleting DocumentStatusEnum = "Deleting"
DocumentStatusEnumFailed DocumentStatusEnum = "Failed"
)


