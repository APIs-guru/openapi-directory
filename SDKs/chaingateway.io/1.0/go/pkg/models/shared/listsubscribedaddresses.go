package shared

type ListSubscribedAddresses struct {
	Ipns []Ipn `json:"ipns"`
	Ok   bool  `json:"ok"`
}
