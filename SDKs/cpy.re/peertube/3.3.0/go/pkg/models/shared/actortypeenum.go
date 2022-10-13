package shared

type ActorTypeEnum string

const (
	ActorTypeEnumPerson       ActorTypeEnum = "Person"
	ActorTypeEnumApplication  ActorTypeEnum = "Application"
	ActorTypeEnumGroup        ActorTypeEnum = "Group"
	ActorTypeEnumService      ActorTypeEnum = "Service"
	ActorTypeEnumOrganization ActorTypeEnum = "Organization"
)
