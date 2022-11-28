import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/dgft"];
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
     * importerExporterCodeVerificationApi - Importer-Exporter Code (IEC) Verification API.
     *
     * Description of Importer-Exporter Code (IEC) Verification API.
    **/
    importerExporterCodeVerificationApi(req: operations.ImporterExporterCodeVerificationApiRequest, config?: AxiosRequestConfig): Promise<operations.ImporterExporterCodeVerificationApiResponse>;
}
export {};
