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
	Balance   *int64                `json:"balance"`
	Haben     *int64                `json:"haben"`
	Soll      *int64                `json:"soll"`
	Txs       []Transactions        `json:"txs"`
	Variation *BalanceVariationEnum `json:"variation"`
}
