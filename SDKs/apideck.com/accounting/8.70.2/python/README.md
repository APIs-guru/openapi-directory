# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BalanceSheetOneRequest(
    security=operations.BalanceSheetOneSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.BalanceSheetOneQueryParams(
        filter=shared.BalanceSheetFilter(
            end_date="modi",
            start_date="consequuntur",
        ),
        pass_through={
            "asperiores": "illo",
        },
        raw=True,
    ),
    headers=operations.BalanceSheetOneHeaders(
        x_apideck_app_id="molestias",
        x_apideck_consumer_id="eius",
        x_apideck_service_id="totam",
    ),
)
    
res = s.balance_sheet_one(req)

if res.get_balance_sheet_response is not None:
    # handle response
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