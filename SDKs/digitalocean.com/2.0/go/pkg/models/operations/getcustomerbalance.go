package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomerBalance200ApplicationJSON struct {
	AccountBalance     *string    `json:"account_balance"`
	GeneratedAt        *time.Time `json:"generated_at"`
	MonthToDateBalance *string    `json:"month_to_date_balance"`
	MonthToDateUsage   *string    `json:"month_to_date_usage"`
}

type GetCustomerBalance401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetCustomerBalanceResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetCustomerBalance200ApplicationJSONObject                *GetCustomerBalance200ApplicationJSON
	GetCustomerBalance401ApplicationJSONObject                *GetCustomerBalance401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
