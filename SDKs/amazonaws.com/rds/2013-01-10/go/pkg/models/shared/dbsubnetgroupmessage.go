package shared

type DbSubnetGroupMessage struct {
	DbSubnetGroups []DbSubnetGroup
	Marker         *string
}
