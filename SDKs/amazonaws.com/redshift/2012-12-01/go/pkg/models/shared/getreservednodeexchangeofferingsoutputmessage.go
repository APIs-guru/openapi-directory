package shared

type GetReservedNodeExchangeOfferingsOutputMessage struct {
	Marker                *string
	ReservedNodeOfferings []ReservedNodeOffering
}
