import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictandaman/v3"];
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
     * brlcs - Bar License
     *
     * API to verify Bar License.
    **/
    brlcs(req: operations.BrlcsRequest, config?: AxiosRequestConfig): Promise<operations.BrlcsResponse>;
    /**
     * dpcer - Dependency Certificate
     *
     * API to verify Dependency Certificate.
    **/
    dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * fmcer - Family Membership Certificate
     *
     * API to verify Family Membership Certificate.
    **/
    fmcer(req: operations.FmcerRequest, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * lccep - Local Candidate/ Status Certificate
     *
     * API to verify Local Candidate/ Status Certificate.
    **/
    lccep(req: operations.LccepRequest, config?: AxiosRequestConfig): Promise<operations.LccepResponse>;
    /**
     * ndcer - No Dues/ Objection Certificate
     *
     * API to verify No Dues/ Objection Certificate.
    **/
    ndcer(req: operations.NdcerRequest, config?: AxiosRequestConfig): Promise<operations.NdcerResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * rmcer - Marriage Certificate
     *
     * API to verify Marriage Certificate.
    **/
    rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * rscer - Residence Certificate
     *
     * API to verify Residence Certificate.
    **/
    rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * rucer - Regional Language(s) Certificate
     *
     * API to verify Regional Language(s) Certificate.
    **/
    rucer(req: operations.RucerRequest, config?: AxiosRequestConfig): Promise<operations.RucerResponse>;
    /**
     * sicrd - Senior Citizen Identity Card/ Certificate
     *
     * API to verify Senior Citizen Identity Card/ Certificate.
    **/
    sicrd(req: operations.SicrdRequest, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * vlcer - Valuation Certificate
     *
     * API to verify Valuation Certificate.
    **/
    vlcer(req: operations.VlcerRequest, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
}
export {};
