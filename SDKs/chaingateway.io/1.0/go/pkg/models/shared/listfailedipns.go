package shared

type ListFailedIPNs struct {
	FailedIpns []FailedIpn `json:"failed_ipns"`
	Ok         bool        `json:"ok"`
}
