import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name
    **/
    CompanyAlternativeSearch(req: operations.CompanyAlternativeSearchRequest, config?: AxiosRequestConfig): Promise<operations.CompanyAlternativeSearchResponse>;
    /**
     * Request full announcement data identified by announcement id
    **/
    CompanyAnnouncement(req: operations.CompanyAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.CompanyAnnouncementResponse>;
    /**
     * Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.
    **/
    CompanyDeepsearchIsin(req: operations.CompanyDeepsearchIsinRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchIsinResponse>;
    /**
     * Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
    **/
    CompanyDeepsearchLei(req: operations.CompanyDeepsearchLeiRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchLeiResponse>;
    /**
     * Search for companies with a certain name. Search is forwarded to the respective business register of the country.
    **/
    CompanyDeepsearchName(req: operations.CompanyDeepsearchNameRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNameResponse>;
    /**
     * Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
    **/
    CompanyDeepsearchNumber(req: operations.CompanyDeepsearchNumberRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNumberResponse>;
    /**
     * Search announcements filed to the business register from a company identified by an id
    **/
    CompanyIdAnnouncements(req: operations.CompanyIdAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdAnnouncementsResponse>;
    /**
     * Get company details by id. The level of details is defined by the dataset parameter
    **/
    CompanyIdDataset(req: operations.CompanyIdDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdDatasetResponse>;
    /**
     * Request company superdata identified by company id
    **/
    CompanyIdSuper(req: operations.CompanyIdSuperRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdSuperResponse>;
    /**
     * Get current list of available ChangeTypes to subscribe to
    **/
    CompanyMonitorChangeTypesList(req: operations.CompanyMonitorChangeTypesListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorChangeTypesListResponse>;
    /**
     * Query status of registered monitors for a specific company identified by a company id
    **/
    CompanyMonitorId(req: operations.CompanyMonitorIdRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorIdResponse>;
    /**
     * Query list of all registered monitors for logged in user
    **/
    CompanyMonitorList(req: operations.CompanyMonitorListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorListResponse>;
    /**
     * Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.
    **/
    CompanyMonitorRegister(req: operations.CompanyMonitorRegisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorRegisterResponse>;
    /**
     * Deactivate a previously registered company monitor identified by the notifier id
    **/
    CompanyMonitorUnregister(req: operations.CompanyMonitorUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorUnregisterResponse>;
    /**
     * Query list of registered notifications for a specific company identified by a company id
    **/
    CompanyNotificationId(req: operations.CompanyNotificationIdRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationIdResponse>;
    /**
     * Query list of registered callback URLs for logged in user
    **/
    CompanyNotificationList(req: operations.CompanyNotificationListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationListResponse>;
    /**
     * Register a new callback URL to get notifications about companies.
    **/
    CompanyNotificationRegister(req: operations.CompanyNotificationRegisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationRegisterResponse>;
    /**
     * Deactivate a previously registered company monitor identified by the notifier id
    **/
    CompanyNotificationUnregister(req: operations.CompanyNotificationUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationUnregisterResponse>;
    /**
     * KYC API company index lookup for companies with a certain name in a country.
    **/
    CompanySearchName(req: operations.CompanySearchNameRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchNameResponse>;
    /**
     * KYC API company index lookup for companies with a certain register number in a country.
    **/
    CompanySearchNumber(req: operations.CompanySearchNumberRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchNumberResponse>;
    /**
     * Performs a basic verification check of a given EIN tax number.
    **/
    EinVerificationBasic(req: operations.EinVerificationBasicRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationBasicResponse>;
    /**
     * Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details
    **/
    EinVerificationComprehensive(req: operations.EinVerificationComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationComprehensiveResponse>;
    /**
     * Lookup EIN number for a company by its company name
    **/
    EinVerificationLookup(req: operations.EinVerificationLookupRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationLookupResponse>;
    /**
     * Returns the health information for the official business registers based on usage.
    **/
    HealthCheck(req: operations.HealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.HealthCheckResponse>;
    /**
     * Basic verification of an IBAN number validating its structure
    **/
    IbanBasic(req: operations.IbanBasicRequest, config?: AxiosRequestConfig): Promise<operations.IbanBasicResponse>;
    /**
     * Comprehensive verification of IBAN number using a service provider for verification
    **/
    IbanComprehensive(req: operations.IbanComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.IbanComprehensiveResponse>;
    /**
     * Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.
    **/
    NifBasic(req: operations.NifBasicRequest, config?: AxiosRequestConfig): Promise<operations.NifBasicResponse>;
    /**
     * Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.
    **/
    NifComprehensive(req: operations.NifComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.NifComprehensiveResponse>;
    /**
     * Retrieve a list of all active Pep Sanction Report monitors for this account
    **/
    PepMonitorList(req: operations.PepMonitorListRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorListResponse>;
    /**
     * Unregister a previously created Pep Sanction Report Monitor
    **/
    PepMonitorUnregister(req: operations.PepMonitorUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorUnregisterResponse>;
    /**
     * Update the webhook URL of an active Pep Sanction Report Monitor
    **/
    PepMonitorUpdate(req: operations.PepMonitorUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorUpdateResponse>;
    /**
     * Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.
    **/
    PepOrder(req: operations.PepOrderRequest, config?: AxiosRequestConfig): Promise<operations.PepOrderResponse>;
    /**
     * Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
    **/
    PepRetrieve(req: operations.PepRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PepRetrieveResponse>;
    /**
     * Check availability and valid options for a particular product for a particular company identfied by its id
    **/
    ProductAvailability(req: operations.ProductAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.ProductAvailabilityResponse>;
    /**
     * Returns a catalog of purchasable products available with some metadata for a particular country
    **/
    ProductCatalog(req: operations.ProductCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ProductCatalogResponse>;
    /**
     * Queries and returns all metadata associated with a notifier identified by its notifer id
    **/
    ProductNotifier(req: operations.ProductNotifierRequest, config?: AxiosRequestConfig): Promise<operations.ProductNotifierResponse>;
    /**
     * Create a notifier for a particular order. Parameters can be supplied in the path
    **/
    ProductNotifierCreate(req: operations.ProductNotifierCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProductNotifierCreateResponse>;
    /**
     * Place an order for a particular product identified by its SKU for a particular company identified by its id
    **/
    ProductOrder(req: operations.ProductOrderRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderResponse>;
    /**
     * Place an order for a concierge product
    **/
    ProductOrderConcierge(req: operations.ProductOrderConciergeRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderConciergeResponse>;
    /**
     * Place an order for a UBO (ultimate beneficial owner) discovery report
    **/
    ProductOrderUbo(req: operations.ProductOrderUboRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderUboResponse>;
    /**
     * Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id
    **/
    ProductOrderWithOption(req: operations.ProductOrderWithOptionRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderWithOptionResponse>;
    /**
     * Retrieves the document or structured data associated with a completed order identified with its order id
    **/
    ProductRetrieve(req: operations.ProductRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.ProductRetrieveResponse>;
    /**
     * Search for possible products for a particular company identified by its id
    **/
    ProductSearch(req: operations.ProductSearchRequest, config?: AxiosRequestConfig): Promise<operations.ProductSearchResponse>;
    /**
     * Retrieve the current status of an order identified by its order id
    **/
    ProductStatus(req: operations.ProductStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProductStatusResponse>;
    /**
     * Update an existing order identified by its order id
    **/
    ProductUpdateAction(req: operations.ProductUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.ProductUpdateActionResponse>;
    /**
     * Retrieve the list of all currently enabled countries
    **/
    SystemCountries(req: operations.SystemCountriesRequest, config?: AxiosRequestConfig): Promise<operations.SystemCountriesResponse>;
    /**
     * Retrieve pricing rules for your subscription plan
    **/
    SystemPricelist(req: operations.SystemPricelistRequest, config?: AxiosRequestConfig): Promise<operations.SystemPricelistResponse>;
    /**
     * Performs a basic verification check of a given TIN number and name.
    **/
    TinVerificationBasicCheck(req: operations.TinVerificationBasicCheckRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationBasicCheckResponse>;
    /**
     * Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
    **/
    TinVerificationComprehensiveCheck(req: operations.TinVerificationComprehensiveCheckRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationComprehensiveCheckResponse>;
    /**
     * Performs an EIN name match using provided TIN Number
    **/
    TinVerificationNameLookup(req: operations.TinVerificationNameLookupRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationNameLookupResponse>;
    /**
     * Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
    **/
    VatBasic(req: operations.VatBasicRequest, config?: AxiosRequestConfig): Promise<operations.VatBasicResponse>;
    /**
     * Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
    **/
    VatComprehensive(req: operations.VatComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.VatComprehensiveResponse>;
    /**
     * Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.
    **/
    VatLevelTwo(req: operations.VatLevelTwoRequest, config?: AxiosRequestConfig): Promise<operations.VatLevelTwoResponse>;
    /**
     * Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.
    **/
    VatLookup(req: operations.VatLookupRequest, config?: AxiosRequestConfig): Promise<operations.VatLookupResponse>;
}
export {};
