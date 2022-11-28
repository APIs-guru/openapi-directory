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
    s := sdk.New()
    
    res, err := s.Sdk.AccountsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultAccountDto != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AccountsGet` - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `AnalysisCategoriesGet` - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `BankAccountsDelete` - Removes an existing Bank Account.
* `BankAccountsGet` - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* `BankAccountsPost` - Creates a new Bank Account.
* `BankAccountsProcessBatch` - Processes a batch of Bank Accounts.
* `BankAccountsPut` - Updates an existing Bank Account.
* `BookTranTypesGet` - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `CashPaymentsDelete` - Removes an existing Cash Payment.
* `CashPaymentsGet` - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `CashPaymentsPost` - Creates a new Cash Payment.
* `CashPaymentsProcessBatch` - Processes a batch of Cash Payments.
* `CashPaymentsPut` - Updates an existing Cash Payment.
* `CashReceiptsDelete` - Removes an existing Cash Receipt.
* `CashReceiptsGet` - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `CashReceiptsPost` - Creates a new Cash Receipt.
* `CashReceiptsProcessBatch` - Processes a batch of Cash Receipts.
* `CashReceiptsPut` - Updates an existing Cash Receipt.
* `CategoryTypesGet` - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `CompanySettingsGet` - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.
* `CompanySetupConfigGet` - Returns the company configuration settings.
* `CompanySetupConfigGetCompanyOptions` - Returns the company option setting.
* `CompanySetupConfigGetFinancialYear` - Returns the financial year.
* `CustomersDelete` - Removes an existing Customer.
* `CustomersGet` - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `CustomersGetAccountTrans` - Returns a list of Customer's account transactions.
* `CustomersGetOpeningBalance` - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `CustomersGetOpeningBalanceList` - Returns a list of Customer's opening balance transactions.
* `CustomersGetQuotes` - Returns a list of Customer's quotes.
* `CustomersPost` - Creates a new Customer.
* `CustomersProcessBatch` - Processes a batch of Customers.
* `CustomersPut` - Updates an existing Customer.
* `EmailSendEmailStatement` - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `EmailSendQuote` - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `EmailSendSalesInvoice` - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
* `GetV1BankAccountsID` - Returns information about a single Bank Account.
* `GetV1CashPaymentsID` - Returns information about a single Cash Payment.
* `GetV1CashReceiptsID` - Returns information about a single Cash Receipt.
* `GetV1CustomersID` - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
* `GetV1PaymentsID` - Returns information about a single Payments.
* `GetV1ProductsID` - Returns information about a single Product.
* `GetV1PurchasesID` - Returns information about a single Purchases.
* `GetV1QuotesID` - Returns information about a single Quote.
* `GetV1SalesCreditNotesID` - Returns information about a single Sales Credit Note.
* `GetV1SalesEntriesID` - Returns information about a single Sales Entry.
* `GetV1SalesInvoicesID` - Returns information about a single Sales Invoice.
* `GetV1SalesRepsID` - Returns information about a single SaleRep.
* `GetV1SuppliersID` - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
* `OwnerTypeGroupsGet` - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `OwnerTypesGet` - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `PaymentsDelete` - Removes an existing Payment.
* `PaymentsGet` - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `PaymentsPost` - Creates a new Payment.
* `PaymentsProcessBatch` - Processes a batch of Payments.
* `PaymentsPut` - Updates an existing Payment.
* `ProductsDelete` - Removes an existing Product.
* `ProductsGet` - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* `ProductsPost` - Creates a new Product.
* `ProductsProcessBatch` - Processes a batch of Products.
* `ProductsPut` - Updates an existing Product.
* `PurchasesDelete` - Removes an existing Purchase.
* `PurchasesGet` - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `PurchasesPost` - Creates a new Purchase.
* `PurchasesProcessBatch` - Processes a batch of Purchases.
* `PurchasesPut` - Updates an existing Purchase.
* `QuoteClose` - Close a Quote.
* `QuoteDelete` - Removes an existing Quote.
* `QuoteGet` - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* `QuotePost` - Creates a new Quote.
* `QuotePostCreateQuoteWithGeneratingReference` - Creates a new Quote with auto generating reference.
* `QuotePostGenerateSaleInvoice` - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* `QuoteProcessBatch` - Processes a batch of Quote.
* `QuotePut` - Updates an existing Quote.
* `QuoteReopen` - Reopen a Quote.
* `SalesCreditNotesDelete` - Removes an existing Sales Credit Note.
* `SalesCreditNotesGet` - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `SalesCreditNotesPost` - Creates a new Sales Credit Note.
* `SalesCreditNotesProcessBatch` - Processes a batch of Sales Credit Notes.
* `SalesCreditNotesPut` - Updates an existing Sales Credit Note.
* `SalesEntriesDelete` - Removes an existing Sales Entry.
* `SalesEntriesGet` - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `SalesEntriesPost` - Creates a new Sales Entry.
* `SalesEntriesProcessBatch` - Processes a batch of Sales Entries.
* `SalesEntriesPut` - Updates an existing Sales Entry.
* `SalesInvoicesDelete` - Removes an existing Sales Invoice.
* `SalesInvoicesGet` - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `SalesInvoicesPost` - Creates a new Sales Invoice.
* `SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference` - Creates a new Sale Invoice with auto generating reference.
* `SalesInvoicesProcessBatch` - Processes a batch of Sales Invoices.
* `SalesInvoicesPut` - Updates an existing Sales Invoice.
* `SalesRepDelete` - Removes an existing Sale Rep.
* `SalesRepGet` - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* `SalesRepPost` - Creates a new SaleRep.
* `SalesRepProcessBatch` - Processes a batch of Sale Rep.
* `SalesRepPut` - Updates an existing Sale Rep.
* `SalesGet` - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `SuppliersDelete` - Removes an existing Supplier.
* `SuppliersGet` - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `SuppliersGetAccountTrans` - Returns a list of Supplier's account transactions.
* `SuppliersGetOpeningBalance` - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `SuppliersGetOpeningBalanceList` - Returns a list of Supplier's opening balance transactions.
* `SuppliersPost` - Creates a new Supplier.
* `SuppliersProcessBatch` - Processes a batch of Suppliers.
* `SuppliersPut` - Updates an existing Supplier.
* `UserDefinedFieldsGet` - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `VatAnalysisTypesGet` - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `VatCategoriesGet` - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `VatCategoriesProcessVatRates` - Process Vat Rates
* `VatRatesGet` - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `VatTypesGet` - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
