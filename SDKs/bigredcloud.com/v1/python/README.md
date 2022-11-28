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
    
res = s.sdk.accounts_get()

if res.page_result_account_dto_ is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accounts_get` - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `analysis_categories_get` - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `bank_accounts_delete` - Removes an existing Bank Account.
* `bank_accounts_get` - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* `bank_accounts_post` - Creates a new Bank Account.
* `bank_accounts_process_batch` - Processes a batch of Bank Accounts.
* `bank_accounts_put` - Updates an existing Bank Account.
* `book_tran_types_get` - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `cash_payments_delete` - Removes an existing Cash Payment.
* `cash_payments_get` - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `cash_payments_post` - Creates a new Cash Payment.
* `cash_payments_process_batch` - Processes a batch of Cash Payments.
* `cash_payments_put` - Updates an existing Cash Payment.
* `cash_receipts_delete` - Removes an existing Cash Receipt.
* `cash_receipts_get` - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `cash_receipts_post` - Creates a new Cash Receipt.
* `cash_receipts_process_batch` - Processes a batch of Cash Receipts.
* `cash_receipts_put` - Updates an existing Cash Receipt.
* `category_types_get` - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `company_settings_get` - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.
* `company_setup_config_get` - Returns the company configuration settings.
* `company_setup_config_get_company_options` - Returns the company option setting.
* `company_setup_config_get_financial_year` - Returns the financial year.
* `customers_delete` - Removes an existing Customer.
* `customers_get` - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `customers_get_account_trans` - Returns a list of Customer's account transactions.
* `customers_get_opening_balance` - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `customers_get_opening_balance_list` - Returns a list of Customer's opening balance transactions.
* `customers_get_quotes` - Returns a list of Customer's quotes.
* `customers_post` - Creates a new Customer.
* `customers_process_batch` - Processes a batch of Customers.
* `customers_put` - Updates an existing Customer.
* `email_send_email_statement` - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `email_send_quote` - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `email_send_sales_invoice` - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
* `get_v1_bank_accounts_id_` - Returns information about a single Bank Account.
* `get_v1_cash_payments_id_` - Returns information about a single Cash Payment.
* `get_v1_cash_receipts_id_` - Returns information about a single Cash Receipt.
* `get_v1_customers_id_` - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
* `get_v1_payments_id_` - Returns information about a single Payments.
* `get_v1_products_id_` - Returns information about a single Product.
* `get_v1_purchases_id_` - Returns information about a single Purchases.
* `get_v1_quotes_id_` - Returns information about a single Quote.
* `get_v1_sales_credit_notes_id_` - Returns information about a single Sales Credit Note.
* `get_v1_sales_entries_id_` - Returns information about a single Sales Entry.
* `get_v1_sales_invoices_id_` - Returns information about a single Sales Invoice.
* `get_v1_sales_reps_id_` - Returns information about a single SaleRep.
* `get_v1_suppliers_id_` - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
* `owner_type_groups_get` - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `owner_types_get` - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `payments_delete` - Removes an existing Payment.
* `payments_get` - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `payments_post` - Creates a new Payment.
* `payments_process_batch` - Processes a batch of Payments.
* `payments_put` - Updates an existing Payment.
* `products_delete` - Removes an existing Product.
* `products_get` - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* `products_post` - Creates a new Product.
* `products_process_batch` - Processes a batch of Products.
* `products_put` - Updates an existing Product.
* `purchases_delete` - Removes an existing Purchase.
* `purchases_get` - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `purchases_post` - Creates a new Purchase.
* `purchases_process_batch` - Processes a batch of Purchases.
* `purchases_put` - Updates an existing Purchase.
* `quote_close` - Close a Quote.
* `quote_delete` - Removes an existing Quote.
* `quote_get` - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* `quote_post` - Creates a new Quote.
* `quote_post_create_quote_with_generating_reference` - Creates a new Quote with auto generating reference.
* `quote_post_generate_sale_invoice` - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* `quote_process_batch` - Processes a batch of Quote.
* `quote_put` - Updates an existing Quote.
* `quote_reopen` - Reopen a Quote.
* `sales_credit_notes_delete` - Removes an existing Sales Credit Note.
* `sales_credit_notes_get` - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `sales_credit_notes_post` - Creates a new Sales Credit Note.
* `sales_credit_notes_process_batch` - Processes a batch of Sales Credit Notes.
* `sales_credit_notes_put` - Updates an existing Sales Credit Note.
* `sales_entries_delete` - Removes an existing Sales Entry.
* `sales_entries_get` - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `sales_entries_post` - Creates a new Sales Entry.
* `sales_entries_process_batch` - Processes a batch of Sales Entries.
* `sales_entries_put` - Updates an existing Sales Entry.
* `sales_invoices_delete` - Removes an existing Sales Invoice.
* `sales_invoices_get` - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `sales_invoices_post` - Creates a new Sales Invoice.
* `sales_invoices_post_create_sale_invoice_with_generating_reference` - Creates a new Sale Invoice with auto generating reference.
* `sales_invoices_process_batch` - Processes a batch of Sales Invoices.
* `sales_invoices_put` - Updates an existing Sales Invoice.
* `sales_rep_delete` - Removes an existing Sale Rep.
* `sales_rep_get` - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* `sales_rep_post` - Creates a new SaleRep.
* `sales_rep_process_batch` - Processes a batch of Sale Rep.
* `sales_rep_put` - Updates an existing Sale Rep.
* `sales_get` - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `suppliers_delete` - Removes an existing Supplier.
* `suppliers_get` - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `suppliers_get_account_trans` - Returns a list of Supplier's account transactions.
* `suppliers_get_opening_balance` - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `suppliers_get_opening_balance_list` - Returns a list of Supplier's opening balance transactions.
* `suppliers_post` - Creates a new Supplier.
* `suppliers_process_batch` - Processes a batch of Suppliers.
* `suppliers_put` - Updates an existing Supplier.
* `user_defined_fields_get` - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `vat_analysis_types_get` - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `vat_categories_get` - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `vat_categories_process_vat_rates` - Process Vat Rates
* `vat_rates_get` - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.
* `vat_types_get` - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
