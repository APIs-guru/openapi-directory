package shared

// GlobalClusterMember
//
//	A data structure with information about any primary and secondary clusters associated with an Aurora global database.
type GlobalClusterMember struct {
	DbClusterArn                *string
	GlobalWriteForwardingStatus *WriteForwardingStatusEnum
	IsWriter                    *bool
	Readers                     []string
}
