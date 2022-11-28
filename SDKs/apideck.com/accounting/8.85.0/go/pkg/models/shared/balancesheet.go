package shared

import (
	"time"
)

type BalanceSheetAssetsCurrentAssetsAccounts struct {
	ID    *string  `json:"id,omitempty"`
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

type BalanceSheetAssetsCurrentAssets struct {
	Accounts []BalanceSheetAssetsCurrentAssetsAccounts `json:"accounts"`
	Total    float64                                   `json:"total"`
}

type BalanceSheetAssetsFixedAssetsAccounts struct {
	ID    *string  `json:"id,omitempty"`
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
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
	ID    *string  `json:"id,omitempty"`
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

type BalanceSheetEquity struct {
	Items []BalanceSheetEquityItems `json:"items"`
	Total float64                   `json:"total"`
}

type BalanceSheetLiabilitiesAccounts struct {
	ID    *string  `json:"id,omitempty"`
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

type BalanceSheetLiabilities struct {
	Accounts []BalanceSheetLiabilitiesAccounts `json:"accounts"`
	Total    float64                           `json:"total"`
}

type BalanceSheet struct {
	Assets      BalanceSheetAssets      `json:"assets"`
	CreatedAt   *time.Time              `json:"created_at,omitempty"`
	CreatedBy   *string                 `json:"created_by,omitempty"`
	EndDate     *string                 `json:"end_date,omitempty"`
	Equity      BalanceSheetEquity      `json:"equity"`
	ID          *string                 `json:"id,omitempty"`
	Liabilities BalanceSheetLiabilities `json:"liabilities"`
	ReportName  string                  `json:"report_name"`
	StartDate   string                  `json:"start_date"`
	UpdatedAt   *time.Time              `json:"updated_at,omitempty"`
	UpdatedBy   *string                 `json:"updated_by,omitempty"`
}
