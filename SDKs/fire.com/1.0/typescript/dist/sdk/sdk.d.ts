import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api-preprod.fire.com/business/v1", "https://api.fire.com/business/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * activateMandate - Activate a direct debit mandate
     *
     * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
     *
    **/
    activateMandate(req: operations.ActivateMandateRequest, config?: AxiosRequestConfig): Promise<operations.ActivateMandateResponse>;
    /**
     * addAccount - Add a new account
     *
     * Creates a new fire.com account.
     *
     * **Please note there is a charge associated with creating a new account.**
     *
    **/
    addAccount(req: operations.AddAccountRequest, config?: AxiosRequestConfig): Promise<operations.AddAccountResponse>;
    /**
     * addBankTransferBatchPayment - Add payment for an bank transfers
     *
     * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
     *
     * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
     *
     * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
     *
    **/
    addBankTransferBatchPayment(req: operations.AddBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddBankTransferBatchPaymentResponse>;
    /**
     * addInternalTransferBatchPayment - Add payment for an internal transfers
     *
     * Simply specify the source account, destination account, amount and a reference.
    **/
    addInternalTransferBatchPayment(req: operations.AddInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddInternalTransferBatchPaymentResponse>;
    /**
     * authenticate - Authenticate with the API.
     *
     * Authenticate with the API.
    **/
    authenticate(req: operations.AuthenticateRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateResponse>;
    /**
     * cancelBatchPayment - Cancel a batch
     *
     * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
    **/
    cancelBatchPayment(req: operations.CancelBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelBatchPaymentResponse>;
    /**
     * cancelMandateByUuid - Cancel a direct debit mandate
     *
     * This endpoint allows you to cancel a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
     *
    **/
    cancelMandateByUuid(req: operations.CancelMandateByUuidRequest, config?: AxiosRequestConfig): Promise<operations.CancelMandateByUuidResponse>;
    /**
     * createApiApplication - Create a new API Application
     *
     * Create a new API Application with specified permissions
    **/
    createApiApplication(req: operations.CreateApiApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiApplicationResponse>;
    /**
     * createBatchPayment - Create a new bath of payments
     *
     * This is the first step in creating a batch payment.
    **/
    createBatchPayment(req: operations.CreateBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchPaymentResponse>;
    /**
     * createNewCard - Create a new debit card.
     *
     * You can create multiple debit cards which can be linked to your fire.com accounts.
    **/
    createNewCard(req: operations.CreateNewCardRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewCardResponse>;
    /**
     * deleteBankTransferBatchPayment - Remove a Payment from the Batch (Bank Transfers)
     *
     * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    deleteBankTransferBatchPayment(req: operations.DeleteBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankTransferBatchPaymentResponse>;
    /**
     * deleteInternalTransferBatchPayment - Remove a Payment from the Batch (Internal Transfer)
     *
     * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    deleteInternalTransferBatchPayment(req: operations.DeleteInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInternalTransferBatchPaymentResponse>;
    /**
     * getAccountById - Retrieve the details of a fire.com Account
     *
     * You can retrieve the details of a fire.com Account by its `ican`.
    **/
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * getAccounts - List all fire.com Accounts
     *
     * Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
    **/
    getAccounts(config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getBatches - List batches
     *
     * Returns the list of batch with the specified types and statuses.
     *
    **/
    getBatches(req: operations.GetBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    /**
     * getDetailsSingleBatch - Get details of a single Batch
     *
     * Returns the details of the batch specified in the API endpoint - {batchUuid}.
    **/
    getDetailsSingleBatch(req: operations.GetDetailsSingleBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsSingleBatchResponse>;
    /**
     * getDirectDebitByUuid - Get the deails of a direct debit
     *
     * Retrieve all details of a single direct debit collection/payment, whether successful or not.
     * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
     *
    **/
    getDirectDebitByUuid(req: operations.GetDirectDebitByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectDebitByUuidResponse>;
    /**
     * getDirectDebitMandates - List all direct debit mandates
     *
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
     *
    **/
    getDirectDebitMandates(config?: AxiosRequestConfig): Promise<operations.GetDirectDebitMandatesResponse>;
    /**
     * getDirectDebitsForMandateUuid - Get all DD payments associated with a direct debit mandate
     *
     * Retrieve all direct debit payments associated with a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
     *
    **/
    getDirectDebitsForMandateUuid(req: operations.GetDirectDebitsForMandateUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectDebitsForMandateUuidResponse>;
    /**
     * getItemsBatchBankTransfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    getItemsBatchBankTransfer(req: operations.GetItemsBatchBankTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchBankTransferResponse>;
    /**
     * getItemsBatchInternalTrasnfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    getItemsBatchInternalTrasnfer(req: operations.GetItemsBatchInternalTrasnferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchInternalTrasnferResponse>;
    /**
     * getListOfAspsps - Get list of ASPSPs / Banks
     *
     * Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
     * ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
     *
    **/
    getListOfAspsps(req: operations.GetListOfAspspsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfAspspsResponse>;
    /**
     * getListofApproversForBatch - List Approvers for a Batch
     *
     * Returns a list of approvers for this batch.
    **/
    getListofApproversForBatch(req: operations.GetListofApproversForBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetListofApproversForBatchResponse>;
    /**
     * getListofCards - View List of Cards.
     *
     * Returns a list of cards related to your fire.com account.
    **/
    getListofCards(config?: AxiosRequestConfig): Promise<operations.GetListofCardsResponse>;
    /**
     * getMandate - Get direct debit mandate details
     *
     * Retrieve all details for a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
     *
    **/
    getMandate(req: operations.GetMandateRequest, config?: AxiosRequestConfig): Promise<operations.GetMandateResponse>;
    /**
     * getPayees - List all Payee Bank Accounts
     *
     * Returns all your payee bank accounts.
     *
     * Ordered by date added descending.
     *
     * Can be paginated.
     *
    **/
    getPayees(config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
    /**
     * getPaymentDetails - Get Payment Details
     *
     * Returns the details of a specific payment.
     *
     * As the customer goes through the process of making the payment the status of the payment will change.
     *
     * * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
     * * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
     * * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
     * * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
     * * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
     * * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
     *
     *
     * You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
     *
    **/
    getPaymentDetails(req: operations.GetPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsResponse>;
    /**
     * getTransactionsById - List transactions for an account
     *
     * Retrieve a list of transactions against an account.
    **/
    getTransactionsById(req: operations.GetTransactionsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByIdResponse>;
    /**
     * getTransactionsFilteredById - Filtered list of transactions for an account
     *
     * Retrieve a filtered list of transactions against an account.
     * * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
     * * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
     * * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
     * * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
     *
    **/
    getTransactionsFilteredById(req: operations.GetTransactionsFilteredByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsFilteredByIdResponse>;
    /**
     * getUser - Returns details of a specific fire.com user.
     *
     * You can retrieve the details of a specific fire.com user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - Returns list of all users on your fire.com account
     *
     * You can retrieve the details of all fire.com users on your acount.
    **/
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * newPaymentRequest - Create a Fire Open Payment request
     *
     * Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
     * You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
     *
    **/
    newPaymentRequest(req: operations.NewPaymentRequestRequest, config?: AxiosRequestConfig): Promise<operations.NewPaymentRequestResponse>;
    /**
     * rejectDirectDebit - Reject a direct debit payment
     *
     * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
     * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
     *
    **/
    rejectDirectDebit(req: operations.RejectDirectDebitRequest, config?: AxiosRequestConfig): Promise<operations.RejectDirectDebitResponse>;
    /**
     * submitBatch - Submit a batch for approval
     *
     * Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
     *
     * You can only submit a batch while it is in the OPEN state.
     *
    **/
    submitBatch(config?: AxiosRequestConfig): Promise<operations.SubmitBatchResponse>;
    /**
     * updateMandateAlias - Update a direct debit mandate alias
     *
     * Update Direct Debit Mandate Alias
     * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
     *
    **/
    updateMandateAlias(req: operations.UpdateMandateAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMandateAliasResponse>;
}
export {};
