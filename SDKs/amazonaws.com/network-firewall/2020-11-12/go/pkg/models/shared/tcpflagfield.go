package shared

type TCPFlagField struct {
	Flags []TCPFlagEnum `json:"Flags"`
	Masks []TCPFlagEnum `json:"Masks"`
}
