package shared

type ReservedDbInstancesOfferingMessage struct {
	Marker                       *string
	ReservedDbInstancesOfferings []ReservedDbInstancesOffering
}
