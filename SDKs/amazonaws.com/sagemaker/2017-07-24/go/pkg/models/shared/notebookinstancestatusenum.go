package shared




type NotebookInstanceStatusEnum string

const (
    NotebookInstanceStatusEnumPending NotebookInstanceStatusEnum = "Pending"
NotebookInstanceStatusEnumInService NotebookInstanceStatusEnum = "InService"
NotebookInstanceStatusEnumStopping NotebookInstanceStatusEnum = "Stopping"
NotebookInstanceStatusEnumStopped NotebookInstanceStatusEnum = "Stopped"
NotebookInstanceStatusEnumFailed NotebookInstanceStatusEnum = "Failed"
NotebookInstanceStatusEnumDeleting NotebookInstanceStatusEnum = "Deleting"
NotebookInstanceStatusEnumUpdating NotebookInstanceStatusEnum = "Updating"
)


