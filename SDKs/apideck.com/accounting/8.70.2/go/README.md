# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```go
package main

import (
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
	opts := []sdk.SDKOption{
		sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
		),
	}

	s := sdk.New(opts...)
    
    req := operations.BalanceSheetOneRequest{
        Security: operations.BalanceSheetOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.BalanceSheetOneQueryParams{
            Filter: &shared.BalanceSheetFilter{
                EndDate: "modi",
                StartDate: "consequuntur",
            },
            PassThrough: map[string]interface{}{
                "asperiores": "illo",
            },
            Raw: true,
        },
        Headers: operations.BalanceSheetOneHeaders{
            XApideckAppID: "molestias",
            XApideckConsumerID: "eius",
            XApideckServiceID: "totam",
        },
    }
    
    res, err := s.BalanceSheetOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceSheetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `balanceSheetOne` - Get BalanceSheet
* `billsAdd` - Create Bill
* `billsAll` - List Bills
* `billsDelete` - Delete Bill
* `billsOne` - Get Bill
* `billsUpdate` - Update Bill
* `companyInfoOne` - Get company info
* `creditNotesAdd` - Create Credit Note
* `creditNotesAll` - List Credit Notes
* `creditNotesDelete` - Delete Credit Note
* `creditNotesOne` - Get Credit Note
* `creditNotesUpdate` - Update Credit Note
* `customersAdd` - Create Customer
* `customersAll` - List Customers
* `customersDelete` - Delete Customer
* `customersOne` - Get Customer
* `customersUpdate` - Update Customer
* `invoiceItemsAdd` - Create Invoice Item
* `invoiceItemsAll` - List Invoice Items
* `invoiceItemsDelete` - Delete Invoice Item
* `invoiceItemsOne` - Get Invoice Item
* `invoiceItemsUpdate` - Update Invoice Item
* `invoicesAdd` - Create Invoice
* `invoicesAll` - List Invoices
* `invoicesDelete` - Delete Invoice
* `invoicesOne` - Get Invoice
* `invoicesUpdate` - Update Invoice
* `ledgerAccountsAdd` - Create Ledger Account
* `ledgerAccountsAll` - List Ledger Accounts
* `ledgerAccountsDelete` - Delete Ledger Account
* `ledgerAccountsOne` - Get Ledger Account
* `ledgerAccountsUpdate` - Update Ledger Account
* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment
* `profitAndLossOne` - Get Profit and Loss
* `suppliersAdd` - Create Supplier
* `suppliersAll` - List Suppliers
* `suppliersDelete` - Delete Supplier
* `suppliersOne` - Get Supplier
* `suppliersUpdate` - Update Supplier
* `taxRatesAdd` - Create Tax Rate
* `taxRatesAll` - List Tax Rates
* `taxRatesDelete` - Delete Tax Rate
* `taxRatesOne` - Get Tax Rate
* `taxRatesUpdate` - Update Tax Rate

<!-- End SDK Available Operations -->