package shared

type ReservedDbInstanceMessage struct {
	Marker              *string
	ReservedDbInstances []ReservedDbInstance
}
