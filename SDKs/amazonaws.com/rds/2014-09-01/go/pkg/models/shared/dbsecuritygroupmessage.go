package shared

type DbSecurityGroupMessage struct {
	DbSecurityGroups []DbSecurityGroup
	Marker           *string
}
