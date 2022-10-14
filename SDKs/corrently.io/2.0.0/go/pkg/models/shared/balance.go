package shared

type BalanceVariationEnum string

const (
	BalanceVariationEnumGsb        BalanceVariationEnum = "gsb"
	BalanceVariationEnumErzeugung  BalanceVariationEnum = "erzeugung"
	BalanceVariationEnumEigenstrom BalanceVariationEnum = "eigenstrom"
	BalanceVariationEnumCo2        BalanceVariationEnum = "co2"
	BalanceVariationEnumBaeume     BalanceVariationEnum = "baeume"
)

type Balance struct {
	Balance   *int64                `json:"balance,omitempty"`
	Haben     *int64                `json:"haben,omitempty"`
	Soll      *int64                `json:"soll,omitempty"`
	Txs       []Transactions        `json:"txs,omitempty"`
	Variation *BalanceVariationEnum `json:"variation,omitempty"`
}
