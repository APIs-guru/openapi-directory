package shared




type EntityStatusEnum string

const (
    EntityStatusEnumPending EntityStatusEnum = "PENDING"
EntityStatusEnumInprogress EntityStatusEnum = "INPROGRESS"
EntityStatusEnumFailed EntityStatusEnum = "FAILED"
EntityStatusEnumCompleted EntityStatusEnum = "COMPLETED"
EntityStatusEnumDeleted EntityStatusEnum = "DELETED"
)


