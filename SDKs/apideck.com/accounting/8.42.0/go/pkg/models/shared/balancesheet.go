package shared

import (
	"time"
)

type BalanceSheetAssetsCurrentAssetsAccounts struct {
	ID    *string  `json:"id"`
	Name  *string  `json:"name"`
	Value *float64 `json:"value"`
}

type BalanceSheetAssetsCurrentAssets struct {
	Accounts []BalanceSheetAssetsCurrentAssetsAccounts `json:"accounts"`
	Total    float64                                   `json:"total"`
}

type BalanceSheetAssetsFixedAssetsAccounts struct {
	ID    *string  `json:"id"`
	Name  *string  `json:"name"`
	Value *float64 `json:"value"`
}

type BalanceSheetAssetsFixedAssets struct {
	Accounts []BalanceSheetAssetsFixedAssetsAccounts `json:"accounts"`
	Total    float64                                 `json:"total"`
}

type BalanceSheetAssets struct {
	CurrentAssets BalanceSheetAssetsCurrentAssets `json:"current_assets"`
	FixedAssets   BalanceSheetAssetsFixedAssets   `json:"fixed_assets"`
	Total         float64                         `json:"total"`
}

type BalanceSheetEquityItems struct {
	ID    *string  `json:"id"`
	Name  *string  `json:"name"`
	Value *float64 `json:"value"`
}

type BalanceSheetEquity struct {
	Items []BalanceSheetEquityItems `json:"items"`
	Total float64                   `json:"total"`
}

type BalanceSheetLiabilitiesAccounts struct {
	ID    *string  `json:"id"`
	Name  *string  `json:"name"`
	Value *float64 `json:"value"`
}

type BalanceSheetLiabilities struct {
	Accounts []BalanceSheetLiabilitiesAccounts `json:"accounts"`
	Total    float64                           `json:"total"`
}

type BalanceSheet struct {
	Assets      BalanceSheetAssets      `json:"assets"`
	CreatedAt   *time.Time              `json:"created_at"`
	CreatedBy   *string                 `json:"created_by"`
	EndDate     *string                 `json:"end_date"`
	Equity      BalanceSheetEquity      `json:"equity"`
	ID          *string                 `json:"id"`
	Liabilities BalanceSheetLiabilities `json:"liabilities"`
	ReportName  string                  `json:"report_name"`
	StartDate   string                  `json:"start_date"`
	UpdatedAt   *time.Time              `json:"updated_at"`
	UpdatedBy   *string                 `json:"updated_by"`
}
