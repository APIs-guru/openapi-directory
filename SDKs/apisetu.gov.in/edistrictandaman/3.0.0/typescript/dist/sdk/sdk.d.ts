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
     * API to verify Bar License.
    **/
    Brlcs(req: operations.BrlcsRequest, config?: AxiosRequestConfig): Promise<operations.BrlcsResponse>;
    /**
     * API to verify Dependency Certificate.
    **/
    Dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * API to verify Family Membership Certificate.
    **/
    Fmcer(req: operations.FmcerRequest, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Local Candidate/ Status Certificate.
    **/
    Lccep(req: operations.LccepRequest, config?: AxiosRequestConfig): Promise<operations.LccepResponse>;
    /**
     * API to verify No Dues/ Objection Certificate.
    **/
    Ndcer(req: operations.NdcerRequest, config?: AxiosRequestConfig): Promise<operations.NdcerResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Marriage Certificate.
    **/
    Rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * API to verify Residence Certificate.
    **/
    Rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * API to verify Regional Language(s) Certificate.
    **/
    Rucer(req: operations.RucerRequest, config?: AxiosRequestConfig): Promise<operations.RucerResponse>;
    /**
     * API to verify Senior Citizen Identity Card/ Certificate.
    **/
    Sicrd(req: operations.SicrdRequest, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * API to verify Valuation Certificate.
    **/
    Vlcer(req: operations.VlcerRequest, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
}
export {};
