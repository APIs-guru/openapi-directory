import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adminCustomersChromePrintServersBatchCreatePrintServers - Creates multiple print servers.
    **/
    adminCustomersChromePrintServersBatchCreatePrintServers(req: operations.AdminCustomersChromePrintServersBatchCreatePrintServersRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersBatchCreatePrintServersResponse>;
    /**
     * adminCustomersChromePrintServersBatchDeletePrintServers - Deletes multiple print servers.
    **/
    adminCustomersChromePrintServersBatchDeletePrintServers(req: operations.AdminCustomersChromePrintServersBatchDeletePrintServersRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersBatchDeletePrintServersResponse>;
    /**
     * adminCustomersChromePrintServersCreate - Creates a print server.
    **/
    adminCustomersChromePrintServersCreate(req: operations.AdminCustomersChromePrintServersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersCreateResponse>;
    /**
     * adminCustomersChromePrintServersDelete - Deletes a print server.
    **/
    adminCustomersChromePrintServersDelete(req: operations.AdminCustomersChromePrintServersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersDeleteResponse>;
    /**
     * adminCustomersChromePrintServersGet - Returns a print server's configuration.
    **/
    adminCustomersChromePrintServersGet(req: operations.AdminCustomersChromePrintServersGetRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersGetResponse>;
    /**
     * adminCustomersChromePrintServersList - Lists print server configurations.
    **/
    adminCustomersChromePrintServersList(req: operations.AdminCustomersChromePrintServersListRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersListResponse>;
    /**
     * adminCustomersChromePrintServersPatch - Updates a print server's configuration.
    **/
    adminCustomersChromePrintServersPatch(req: operations.AdminCustomersChromePrintServersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersPatchResponse>;
    /**
     * adminCustomersChromePrintersBatchCreatePrinters - Creates printers under given Organization Unit.
    **/
    adminCustomersChromePrintersBatchCreatePrinters(req: operations.AdminCustomersChromePrintersBatchCreatePrintersRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersBatchCreatePrintersResponse>;
    /**
     * adminCustomersChromePrintersBatchDeletePrinters - Deletes printers in batch.
    **/
    adminCustomersChromePrintersBatchDeletePrinters(req: operations.AdminCustomersChromePrintersBatchDeletePrintersRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersBatchDeletePrintersResponse>;
    /**
     * adminCustomersChromePrintersCreate - Creates a printer under given Organization Unit.
    **/
    adminCustomersChromePrintersCreate(req: operations.AdminCustomersChromePrintersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersCreateResponse>;
    /**
     * adminCustomersChromePrintersList - List printers configs.
    **/
    adminCustomersChromePrintersList(req: operations.AdminCustomersChromePrintersListRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersListResponse>;
    /**
     * adminCustomersChromePrintersListPrinterModels - Lists the supported printer models.
    **/
    adminCustomersChromePrintersListPrinterModels(req: operations.AdminCustomersChromePrintersListPrinterModelsRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersListPrinterModelsResponse>;
    /**
     * directoryCustomersGet - Retrieves a customer.
    **/
    directoryCustomersGet(req: operations.DirectoryCustomersGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersGetResponse>;
    /**
     * directoryCustomersPatch - Patches a customer.
    **/
    directoryCustomersPatch(req: operations.DirectoryCustomersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersPatchResponse>;
    /**
     * directoryCustomersUpdate - Updates a customer.
    **/
    directoryCustomersUpdate(req: operations.DirectoryCustomersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersUpdateResponse>;
}
