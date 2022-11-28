import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://app.bigredcloud.com/API"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * accountsGet - Returns a list of company's Accounts. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "code" fields.
    **/
    accountsGet(config?: AxiosRequestConfig): Promise<operations.AccountsGetResponse>;
    /**
     * analysisCategoriesGet - Returns a list of company's Analysis Categories. Supports OData querying protocol.
     * Filtering is allowed by "categoryTypeId" field.
     * Ordering is allowed by "id" and "orderIndex" fields.
    **/
    analysisCategoriesGet(config?: AxiosRequestConfig): Promise<operations.AnalysisCategoriesGetResponse>;
    /**
     * bankAccountsDelete - Removes an existing Bank Account.
    **/
    bankAccountsDelete(req: operations.BankAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsDeleteResponse>;
    /**
     * bankAccountsGet - Returns a list of company's Bank Account. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "acCode" fields.
    **/
    bankAccountsGet(config?: AxiosRequestConfig): Promise<operations.BankAccountsGetResponse>;
    /**
     * bankAccountsPost - Creates a new Bank Account.
    **/
    bankAccountsPost(req: operations.BankAccountsPostRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsPostResponse>;
    /**
     * bankAccountsProcessBatch - Processes a batch of Bank Accounts.
    **/
    bankAccountsProcessBatch(req: operations.BankAccountsProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsProcessBatchResponse>;
    /**
     * bankAccountsPut - Updates an existing Bank Account.
    **/
    bankAccountsPut(req: operations.BankAccountsPutRequest, config?: AxiosRequestConfig): Promise<operations.BankAccountsPutResponse>;
    /**
     * bookTranTypesGet - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    bookTranTypesGet(config?: AxiosRequestConfig): Promise<operations.BookTranTypesGetResponse>;
    /**
     * cashPaymentsDelete - Removes an existing Cash Payment.
    **/
    cashPaymentsDelete(req: operations.CashPaymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsDeleteResponse>;
    /**
     * cashPaymentsGet - Returns a list of company's Cash Payments. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    cashPaymentsGet(config?: AxiosRequestConfig): Promise<operations.CashPaymentsGetResponse>;
    /**
     * cashPaymentsPost - Creates a new Cash Payment.
    **/
    cashPaymentsPost(req: operations.CashPaymentsPostRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsPostResponse>;
    /**
     * cashPaymentsProcessBatch - Processes a batch of Cash Payments.
    **/
    cashPaymentsProcessBatch(req: operations.CashPaymentsProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsProcessBatchResponse>;
    /**
     * cashPaymentsPut - Updates an existing Cash Payment.
    **/
    cashPaymentsPut(req: operations.CashPaymentsPutRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsPutResponse>;
    /**
     * cashReceiptsDelete - Removes an existing Cash Receipt.
    **/
    cashReceiptsDelete(req: operations.CashReceiptsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsDeleteResponse>;
    /**
     * cashReceiptsGet - Returns a list of company's Cash Receipts. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    cashReceiptsGet(config?: AxiosRequestConfig): Promise<operations.CashReceiptsGetResponse>;
    /**
     * cashReceiptsPost - Creates a new Cash Receipt.
    **/
    cashReceiptsPost(req: operations.CashReceiptsPostRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsPostResponse>;
    /**
     * cashReceiptsProcessBatch - Processes a batch of Cash Receipts.
    **/
    cashReceiptsProcessBatch(req: operations.CashReceiptsProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsProcessBatchResponse>;
    /**
     * cashReceiptsPut - Updates an existing Cash Receipt.
    **/
    cashReceiptsPut(req: operations.CashReceiptsPutRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsPutResponse>;
    /**
     * categoryTypesGet - Returns a list of company's Category Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    categoryTypesGet(config?: AxiosRequestConfig): Promise<operations.CategoryTypesGetResponse>;
    /**
     * companySettingsGet - Returns a list of company settings. Supports OData querying protocol.
     * Filtering is forbidden.
    **/
    companySettingsGet(config?: AxiosRequestConfig): Promise<operations.CompanySettingsGetResponse>;
    /**
     * companySetupConfigGet - Returns the company configuration settings.
    **/
    companySetupConfigGet(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetResponse>;
    /**
     * companySetupConfigGetCompanyOptions - Returns the company option setting.
    **/
    companySetupConfigGetCompanyOptions(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetCompanyOptionsResponse>;
    /**
     * companySetupConfigGetFinancialYear - Returns the financial year.
    **/
    companySetupConfigGetFinancialYear(config?: AxiosRequestConfig): Promise<operations.CompanySetupConfigGetFinancialYearResponse>;
    /**
     * customersDelete - Removes an existing Customer.
    **/
    customersDelete(req: operations.CustomersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * customersGet - Returns a list of company's Customers. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "code" fields.
    **/
    customersGet(config?: AxiosRequestConfig): Promise<operations.CustomersGetResponse>;
    /**
     * customersGetAccountTrans - Returns a list of Customer's account transactions.
    **/
    customersGetAccountTrans(req: operations.CustomersGetAccountTransRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetAccountTransResponse>;
    /**
     * customersGetOpeningBalance - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
    **/
    customersGetOpeningBalance(req: operations.CustomersGetOpeningBalanceRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetOpeningBalanceResponse>;
    /**
     * customersGetOpeningBalanceList - Returns a list of Customer's opening balance transactions.
    **/
    customersGetOpeningBalanceList(req: operations.CustomersGetOpeningBalanceListRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetOpeningBalanceListResponse>;
    /**
     * customersGetQuotes - Returns a list of Customer's quotes.
    **/
    customersGetQuotes(req: operations.CustomersGetQuotesRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetQuotesResponse>;
    /**
     * customersPost - Creates a new Customer.
    **/
    customersPost(req: operations.CustomersPostRequest, config?: AxiosRequestConfig): Promise<operations.CustomersPostResponse>;
    /**
     * customersProcessBatch - Processes a batch of Customers.
    **/
    customersProcessBatch(req: operations.CustomersProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.CustomersProcessBatchResponse>;
    /**
     * customersPut - Updates an existing Customer.
    **/
    customersPut(req: operations.CustomersPutRequest, config?: AxiosRequestConfig): Promise<operations.CustomersPutResponse>;
    /**
     * emailSendEmailStatement - Sends a Statement email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
    **/
    emailSendEmailStatement(req: operations.EmailSendEmailStatementRequest, config?: AxiosRequestConfig): Promise<operations.EmailSendEmailStatementResponse>;
    /**
     * emailSendQuote - Sends a Quote email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
    **/
    emailSendQuote(req: operations.EmailSendQuoteRequest, config?: AxiosRequestConfig): Promise<operations.EmailSendQuoteResponse>;
    /**
     * emailSendSalesInvoice - Sends a Sales Invoice email.
     * If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
    **/
    emailSendSalesInvoice(req: operations.EmailSendSalesInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.EmailSendSalesInvoiceResponse>;
    /**
     * getV1BankAccountsId - Returns information about a single Bank Account.
    **/
    getV1BankAccountsId(req: operations.GetV1BankAccountsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1BankAccountsIdResponse>;
    /**
     * getV1CashPaymentsId - Returns information about a single Cash Payment.
    **/
    getV1CashPaymentsId(req: operations.GetV1CashPaymentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CashPaymentsIdResponse>;
    /**
     * getV1CashReceiptsId - Returns information about a single Cash Receipt.
    **/
    getV1CashReceiptsId(req: operations.GetV1CashReceiptsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CashReceiptsIdResponse>;
    /**
     * getV1CustomersId - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
    **/
    getV1CustomersId(req: operations.GetV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CustomersIdResponse>;
    /**
     * getV1PaymentsId - Returns information about a single Payments.
    **/
    getV1PaymentsId(req: operations.GetV1PaymentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PaymentsIdResponse>;
    /**
     * getV1ProductsId - Returns information about a single Product.
    **/
    getV1ProductsId(req: operations.GetV1ProductsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1ProductsIdResponse>;
    /**
     * getV1PurchasesId - Returns information about a single Purchases.
    **/
    getV1PurchasesId(req: operations.GetV1PurchasesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PurchasesIdResponse>;
    /**
     * getV1QuotesId - Returns information about a single Quote.
    **/
    getV1QuotesId(req: operations.GetV1QuotesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1QuotesIdResponse>;
    /**
     * getV1SalesCreditNotesId - Returns information about a single Sales Credit Note.
    **/
    getV1SalesCreditNotesId(req: operations.GetV1SalesCreditNotesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesCreditNotesIdResponse>;
    /**
     * getV1SalesEntriesId - Returns information about a single Sales Entry.
    **/
    getV1SalesEntriesId(req: operations.GetV1SalesEntriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesEntriesIdResponse>;
    /**
     * getV1SalesInvoicesId - Returns information about a single Sales Invoice.
    **/
    getV1SalesInvoicesId(req: operations.GetV1SalesInvoicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesInvoicesIdResponse>;
    /**
     * getV1SalesRepsId - Returns information about a single SaleRep.
    **/
    getV1SalesRepsId(req: operations.GetV1SalesRepsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesRepsIdResponse>;
    /**
     * getV1SuppliersId - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
    **/
    getV1SuppliersId(req: operations.GetV1SuppliersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SuppliersIdResponse>;
    /**
     * ownerTypeGroupsGet - Returns a list of global Owner Type Groups. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    ownerTypeGroupsGet(config?: AxiosRequestConfig): Promise<operations.OwnerTypeGroupsGetResponse>;
    /**
     * ownerTypesGet - Returns a list of global Owner Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    ownerTypesGet(config?: AxiosRequestConfig): Promise<operations.OwnerTypesGetResponse>;
    /**
     * paymentsDelete - Removes an existing Payment.
    **/
    paymentsDelete(req: operations.PaymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsDeleteResponse>;
    /**
     * paymentsGet - Returns a list of company's Payments. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    paymentsGet(config?: AxiosRequestConfig): Promise<operations.PaymentsGetResponse>;
    /**
     * paymentsPost - Creates a new Payment.
    **/
    paymentsPost(req: operations.PaymentsPostRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsPostResponse>;
    /**
     * paymentsProcessBatch - Processes a batch of Payments.
    **/
    paymentsProcessBatch(req: operations.PaymentsProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsProcessBatchResponse>;
    /**
     * paymentsPut - Updates an existing Payment.
    **/
    paymentsPut(req: operations.PaymentsPutRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsPutResponse>;
    /**
     * productsDelete - Removes an existing Product.
    **/
    productsDelete(req: operations.ProductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProductsDeleteResponse>;
    /**
     * productsGet - Returns a list of company's Products. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "stockCode" fields.
    **/
    productsGet(config?: AxiosRequestConfig): Promise<operations.ProductsGetResponse>;
    /**
     * productsPost - Creates a new Product.
    **/
    productsPost(req: operations.ProductsPostRequest, config?: AxiosRequestConfig): Promise<operations.ProductsPostResponse>;
    /**
     * productsProcessBatch - Processes a batch of Products.
    **/
    productsProcessBatch(req: operations.ProductsProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.ProductsProcessBatchResponse>;
    /**
     * productsPut - Updates an existing Product.
    **/
    productsPut(req: operations.ProductsPutRequest, config?: AxiosRequestConfig): Promise<operations.ProductsPutResponse>;
    /**
     * purchasesDelete - Removes an existing Purchase.
    **/
    purchasesDelete(req: operations.PurchasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesDeleteResponse>;
    /**
     * purchasesGet - Returns a list of company's Purchases. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    purchasesGet(config?: AxiosRequestConfig): Promise<operations.PurchasesGetResponse>;
    /**
     * purchasesPost - Creates a new Purchase.
    **/
    purchasesPost(req: operations.PurchasesPostRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesPostResponse>;
    /**
     * purchasesProcessBatch - Processes a batch of Purchases.
    **/
    purchasesProcessBatch(req: operations.PurchasesProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesProcessBatchResponse>;
    /**
     * purchasesPut - Updates an existing Purchase.
    **/
    purchasesPut(req: operations.PurchasesPutRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesPutResponse>;
    /**
     * quoteClose - Close a Quote.
    **/
    quoteClose(req: operations.QuoteCloseRequest, config?: AxiosRequestConfig): Promise<operations.QuoteCloseResponse>;
    /**
     * quoteDelete - Removes an existing Quote.
    **/
    quoteDelete(req: operations.QuoteDeleteRequest, config?: AxiosRequestConfig): Promise<operations.QuoteDeleteResponse>;
    /**
     * quoteGet - Returns a list of company's Quotes.
     * Filtering is forbidden.
     * Ordering is allowed by "id".
    **/
    quoteGet(config?: AxiosRequestConfig): Promise<operations.QuoteGetResponse>;
    /**
     * quotePost - Creates a new Quote.
    **/
    quotePost(req: operations.QuotePostRequest, config?: AxiosRequestConfig): Promise<operations.QuotePostResponse>;
    /**
     * quotePostCreateQuoteWithGeneratingReference - Creates a new Quote with auto generating reference.
    **/
    quotePostCreateQuoteWithGeneratingReference(req: operations.QuotePostCreateQuoteWithGeneratingReferenceRequest, config?: AxiosRequestConfig): Promise<operations.QuotePostCreateQuoteWithGeneratingReferenceResponse>;
    /**
     * quotePostGenerateSaleInvoice - Generate a sale invoice from a Quote.
     * When sale invoice is empty, new sale invoice will be generated from Quote.
    **/
    quotePostGenerateSaleInvoice(req: operations.QuotePostGenerateSaleInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.QuotePostGenerateSaleInvoiceResponse>;
    /**
     * quoteProcessBatch - Processes a batch of Quote.
    **/
    quoteProcessBatch(req: operations.QuoteProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.QuoteProcessBatchResponse>;
    /**
     * quotePut - Updates an existing Quote.
    **/
    quotePut(req: operations.QuotePutRequest, config?: AxiosRequestConfig): Promise<operations.QuotePutResponse>;
    /**
     * quoteReopen - Reopen a Quote.
    **/
    quoteReopen(req: operations.QuoteReopenRequest, config?: AxiosRequestConfig): Promise<operations.QuoteReopenResponse>;
    /**
     * salesCreditNotesDelete - Removes an existing Sales Credit Note.
    **/
    salesCreditNotesDelete(req: operations.SalesCreditNotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesDeleteResponse>;
    /**
     * salesCreditNotesGet - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    salesCreditNotesGet(config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesGetResponse>;
    /**
     * salesCreditNotesPost - Creates a new Sales Credit Note.
    **/
    salesCreditNotesPost(req: operations.SalesCreditNotesPostRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesPostResponse>;
    /**
     * salesCreditNotesProcessBatch - Processes a batch of Sales Credit Notes.
    **/
    salesCreditNotesProcessBatch(req: operations.SalesCreditNotesProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesProcessBatchResponse>;
    /**
     * salesCreditNotesPut - Updates an existing Sales Credit Note.
    **/
    salesCreditNotesPut(req: operations.SalesCreditNotesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesPutResponse>;
    /**
     * salesEntriesDelete - Removes an existing Sales Entry.
    **/
    salesEntriesDelete(req: operations.SalesEntriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesDeleteResponse>;
    /**
     * salesEntriesGet - Returns a list of company's Sales Entries. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    salesEntriesGet(config?: AxiosRequestConfig): Promise<operations.SalesEntriesGetResponse>;
    /**
     * salesEntriesPost - Creates a new Sales Entry.
    **/
    salesEntriesPost(req: operations.SalesEntriesPostRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesPostResponse>;
    /**
     * salesEntriesProcessBatch - Processes a batch of Sales Entries.
    **/
    salesEntriesProcessBatch(req: operations.SalesEntriesProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesProcessBatchResponse>;
    /**
     * salesEntriesPut - Updates an existing Sales Entry.
    **/
    salesEntriesPut(req: operations.SalesEntriesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesPutResponse>;
    /**
     * salesInvoicesDelete - Removes an existing Sales Invoice.
    **/
    salesInvoicesDelete(req: operations.SalesInvoicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesDeleteResponse>;
    /**
     * salesInvoicesGet - Returns a list of company's Sales Invoices. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    salesInvoicesGet(config?: AxiosRequestConfig): Promise<operations.SalesInvoicesGetResponse>;
    /**
     * salesInvoicesPost - Creates a new Sales Invoice.
    **/
    salesInvoicesPost(req: operations.SalesInvoicesPostRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPostResponse>;
    /**
     * salesInvoicesPostCreateSaleInvoiceWithGeneratingReference - Creates a new Sale Invoice with auto generating reference.
    **/
    salesInvoicesPostCreateSaleInvoiceWithGeneratingReference(req: operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse>;
    /**
     * salesInvoicesProcessBatch - Processes a batch of Sales Invoices.
    **/
    salesInvoicesProcessBatch(req: operations.SalesInvoicesProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesProcessBatchResponse>;
    /**
     * salesInvoicesPut - Updates an existing Sales Invoice.
    **/
    salesInvoicesPut(req: operations.SalesInvoicesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPutResponse>;
    /**
     * salesRepDelete - Removes an existing Sale Rep.
    **/
    salesRepDelete(req: operations.SalesRepDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepDeleteResponse>;
    /**
     * salesRepGet - Returns a list of company's SaleRep.
     * Filtering is forbidden.
     * Ordering is allowed by "id".
    **/
    salesRepGet(config?: AxiosRequestConfig): Promise<operations.SalesRepGetResponse>;
    /**
     * salesRepPost - Creates a new SaleRep.
    **/
    salesRepPost(req: operations.SalesRepPostRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepPostResponse>;
    /**
     * salesRepProcessBatch - Processes a batch of Sale Rep.
    **/
    salesRepProcessBatch(req: operations.SalesRepProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepProcessBatchResponse>;
    /**
     * salesRepPut - Updates an existing Sale Rep.
    **/
    salesRepPut(req: operations.SalesRepPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepPutResponse>;
    /**
     * salesGet - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
    **/
    salesGet(config?: AxiosRequestConfig): Promise<operations.SalesGetResponse>;
    /**
     * suppliersDelete - Removes an existing Supplier.
    **/
    suppliersDelete(req: operations.SuppliersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersDeleteResponse>;
    /**
     * suppliersGet - Returns a list of company's Suppliers. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "code" fields.
    **/
    suppliersGet(config?: AxiosRequestConfig): Promise<operations.SuppliersGetResponse>;
    /**
     * suppliersGetAccountTrans - Returns a list of Supplier's account transactions.
    **/
    suppliersGetAccountTrans(req: operations.SuppliersGetAccountTransRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetAccountTransResponse>;
    /**
     * suppliersGetOpeningBalance - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
    **/
    suppliersGetOpeningBalance(req: operations.SuppliersGetOpeningBalanceRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetOpeningBalanceResponse>;
    /**
     * suppliersGetOpeningBalanceList - Returns a list of Supplier's opening balance transactions.
    **/
    suppliersGetOpeningBalanceList(req: operations.SuppliersGetOpeningBalanceListRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetOpeningBalanceListResponse>;
    /**
     * suppliersPost - Creates a new Supplier.
    **/
    suppliersPost(req: operations.SuppliersPostRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersPostResponse>;
    /**
     * suppliersProcessBatch - Processes a batch of Suppliers.
    **/
    suppliersProcessBatch(req: operations.SuppliersProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersProcessBatchResponse>;
    /**
     * suppliersPut - Updates an existing Supplier.
    **/
    suppliersPut(req: operations.SuppliersPutRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersPutResponse>;
    /**
     * userDefinedFieldsGet - Returns a list of company's User Defined Fields. Supports OData querying protocol.
     * Filtering is allowed by "categoryTypeId" field.
     * Ordering is allowed by "id" and "orderIndex" fields.
    **/
    userDefinedFieldsGet(config?: AxiosRequestConfig): Promise<operations.UserDefinedFieldsGetResponse>;
    /**
     * vatAnalysisTypesGet - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    vatAnalysisTypesGet(config?: AxiosRequestConfig): Promise<operations.VatAnalysisTypesGetResponse>;
    /**
     * vatCategoriesGet - Returns a list of global Vat Categories. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    vatCategoriesGet(config?: AxiosRequestConfig): Promise<operations.VatCategoriesGetResponse>;
    /**
     * vatCategoriesProcessVatRates - Process Vat Rates
    **/
    vatCategoriesProcessVatRates(req: operations.VatCategoriesProcessVatRatesRequest, config?: AxiosRequestConfig): Promise<operations.VatCategoriesProcessVatRatesResponse>;
    /**
     * vatRatesGet - Returns a list of company's Vat Rates. Supports OData querying protocol.
     * Filtering is allowed by "vatCategoryId" field.
     * Ordering is allowed by "id" and "orderIndex" fields.
    **/
    vatRatesGet(config?: AxiosRequestConfig): Promise<operations.VatRatesGetResponse>;
    /**
     * vatTypesGet - Returns a list of global Vat Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
    **/
    vatTypesGet(config?: AxiosRequestConfig): Promise<operations.VatTypesGetResponse>;
}
export {};
