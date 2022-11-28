import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1Company {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * companyAlternativeSearch - Retrieves a list of companies from the KYC API company index
     *
     * KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name
    **/
    companyAlternativeSearch(req: operations.CompanyAlternativeSearchRequest, config?: AxiosRequestConfig): Promise<operations.CompanyAlternativeSearchResponse>;
    /**
     * companyAnnouncement - Retrieves announcement data
     *
     * Request full announcement data identified by announcement id
    **/
    companyAnnouncement(req: operations.CompanyAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.CompanyAnnouncementResponse>;
    /**
     * companyDeepsearchIsin - Retrieves a list of stock exchange listings
     *
     * Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.
    **/
    companyDeepsearchIsin(req: operations.CompanyDeepsearchIsinRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchIsinResponse>;
    /**
     * companyDeepsearchLei - Retrieves a list of companies
     *
     * Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
    **/
    companyDeepsearchLei(req: operations.CompanyDeepsearchLeiRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchLeiResponse>;
    /**
     * companyDeepsearchName - Retrieves a list of companies from the official business register
     *
     * Search for companies with a certain name. Search is forwarded to the respective business register of the country.
    **/
    companyDeepsearchName(req: operations.CompanyDeepsearchNameRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNameResponse>;
    /**
     * companyDeepsearchNumber - Retrieves a list of companies from the official business register
     *
     * Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
    **/
    companyDeepsearchNumber(req: operations.CompanyDeepsearchNumberRequest, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNumberResponse>;
    /**
     * companyIdAnnouncements - Retrieves company announcements
     *
     * Search announcements filed to the business register from a company identified by an id
    **/
    companyIdAnnouncements(req: operations.CompanyIdAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdAnnouncementsResponse>;
    /**
     * companyIdDataset - Retrieves company details
     *
     * Get company details by id. The level of details is defined by the dataset parameter
    **/
    companyIdDataset(req: operations.CompanyIdDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdDatasetResponse>;
    /**
     * companyIdSuper - Retrieves structured data extracted from a company document
     *
     * Request company superdata identified by company id
    **/
    companyIdSuper(req: operations.CompanyIdSuperRequest, config?: AxiosRequestConfig): Promise<operations.CompanyIdSuperResponse>;
    /**
     * companyMonitorChangeTypesList - Get available ChangeTypes
     *
     * Get current list of available ChangeTypes to subscribe to
    **/
    companyMonitorChangeTypesList(req: operations.CompanyMonitorChangeTypesListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorChangeTypesListResponse>;
    /**
     * companyMonitorId - Get monitor status for specific company id
     *
     * Query status of registered monitors for a specific company identified by a company id
    **/
    companyMonitorId(req: operations.CompanyMonitorIdRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorIdResponse>;
    /**
     * companyMonitorList - Retrieves a list of registered monitors
     *
     * Query list of all registered monitors for logged in user
    **/
    companyMonitorList(req: operations.CompanyMonitorListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorListResponse>;
    /**
     * companyMonitorRegister - Register a Company for monitoring
     *
     * Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.
    **/
    companyMonitorRegister(req: operations.CompanyMonitorRegisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorRegisterResponse>;
    /**
     * companyMonitorUnregister - Deactivates an active notification
     *
     * Deactivate a previously registered company monitor identified by the notifier id
    **/
    companyMonitorUnregister(req: operations.CompanyMonitorUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorUnregisterResponse>;
    /**
     * companyNotificationId - Retrieves a list of registered notifications
     *
     * Query list of registered notifications for a specific company identified by a company id
    **/
    companyNotificationId(req: operations.CompanyNotificationIdRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationIdResponse>;
    /**
     * companyNotificationList - Retrieves a list of registered notifications
     *
     * Query list of registered callback URLs for logged in user
    **/
    companyNotificationList(req: operations.CompanyNotificationListRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationListResponse>;
    /**
     * companyNotificationRegister - Creates a new notification
     *
     * Register a new callback URL to get notifications about companies.
    **/
    companyNotificationRegister(req: operations.CompanyNotificationRegisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationRegisterResponse>;
    /**
     * companyNotificationUnregister - Unregister a company from Monitoring
     *
     * Deactivate a previously registered company monitor identified by the notifier id
    **/
    companyNotificationUnregister(req: operations.CompanyNotificationUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationUnregisterResponse>;
    /**
     * companySearchName - Retrieves a list of companies from the KYC API company index
     *
     * KYC API company index lookup for companies with a certain name in a country.
    **/
    companySearchName(req: operations.CompanySearchNameRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchNameResponse>;
    /**
     * companySearchNumber - Retrieves a list of companies from the KYC API company index
     *
     * KYC API company index lookup for companies with a certain register number in a country.
    **/
    companySearchNumber(req: operations.CompanySearchNumberRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchNumberResponse>;
}
