import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MailZones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * configureAlias - Configure a alias
    **/
    configureAlias(req: operations.ConfigureAliasRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAliasResponse>;
    /**
     * configureAntiSpam - Configure anti-spam for mail zone
    **/
    configureAntiSpam(req: operations.ConfigureAntiSpamRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAntiSpamResponse>;
    /**
     * configureSmtpDomain - Configure an extra smtp domain
    **/
    configureSmtpDomain(req: operations.ConfigureSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureSmtpDomainResponse>;
    /**
     * createAlias - Create a new alias
    **/
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * createCatchAll - Create a catch-all on the mail zone
    **/
    createCatchAll(req: operations.CreateCatchAllRequest, config?: AxiosRequestConfig): Promise<operations.CreateCatchAllResponse>;
    /**
     * createSmtpDomain - Create an extra smtp domain
    **/
    createSmtpDomain(req: operations.CreateSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateSmtpDomainResponse>;
    /**
     * deleteAlias - Delete a alias
    **/
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * deleteCatchAll - Delete a catch-all on the mail zone
    **/
    deleteCatchAll(req: operations.DeleteCatchAllRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCatchAllResponse>;
    /**
     * deleteSmtpDomain - Delete an extra smtp domain
    **/
    deleteSmtpDomain(req: operations.DeleteSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSmtpDomainResponse>;
    /**
     * getMailZone - Get the mail zone.
    **/
    getMailZone(req: operations.GetMailZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetMailZoneResponse>;
}
