package shared

type ClusterDbRevisionsMessage struct {
	ClusterDbRevisions []ClusterDbRevision
	Marker             *string
}
