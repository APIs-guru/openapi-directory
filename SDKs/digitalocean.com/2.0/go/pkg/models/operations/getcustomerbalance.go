package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomerBalance200ApplicationJSON struct {
	AccountBalance     *string    `json:"account_balance,omitempty"`
	GeneratedAt        *time.Time `json:"generated_at,omitempty"`
	MonthToDateBalance *string    `json:"month_to_date_balance,omitempty"`
	MonthToDateUsage   *string    `json:"month_to_date_usage,omitempty"`
}

type GetCustomerBalance401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetCustomerBalanceResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetCustomerBalance200ApplicationJSONObject                *GetCustomerBalance200ApplicationJSON
	GetCustomerBalance401ApplicationJSONObject                *GetCustomerBalance401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
