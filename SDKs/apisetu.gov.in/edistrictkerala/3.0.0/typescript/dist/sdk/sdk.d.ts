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
     * API to verify Community Certificate.
    **/
    Cmcer(req: operations.CmcerRequest, config?: AxiosRequestConfig): Promise<operations.CmcerResponse>;
    /**
     * API to verify Conversion Certificate.
    **/
    Cncer(req: operations.CncerRequest, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * API to verify Caste Certificate.
    **/
    Ctcer(req: operations.CtcerRequest, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * API to verify Domicile Certificate.
    **/
    Dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * API to verify Dependency Certificate.
    **/
    Dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * API to verify Destitute Certificate.
    **/
    Dscer(req: operations.DscerRequest, config?: AxiosRequestConfig): Promise<operations.DscerResponse>;
    /**
     * API to verify Family Membership Certificate.
    **/
    Fmcer(req: operations.FmcerRequest, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * API to verify Identification Certificate.
    **/
    Idcer(req: operations.IdcerRequest, config?: AxiosRequestConfig): Promise<operations.IdcerResponse>;
    /**
     * API to verify Inter-Caste Marriage Certificate.
    **/
    Imcer(req: operations.ImcerRequest, config?: AxiosRequestConfig): Promise<operations.ImcerResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Life Certificate.
    **/
    Lfcer(req: operations.LfcerRequest, config?: AxiosRequestConfig): Promise<operations.LfcerResponse>;
    /**
     * API to verify Legal Heir Certificate.
    **/
    Lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * API to verify Location Certificate.
    **/
    Locer(req: operations.LocerRequest, config?: AxiosRequestConfig): Promise<operations.LocerResponse>;
    /**
     * API to verify Minority Certificate.
    **/
    Mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * API to verify Non-Remarriage Certificate.
    **/
    Nrcer(req: operations.NrcerRequest, config?: AxiosRequestConfig): Promise<operations.NrcerResponse>;
    /**
     * API to verify Nativity Certificate.
    **/
    Ntcer(req: operations.NtcerRequest, config?: AxiosRequestConfig): Promise<operations.NtcerResponse>;
    /**
     * API to verify One and the Same Certificate.
    **/
    Oscer(req: operations.OscerRequest, config?: AxiosRequestConfig): Promise<operations.OscerResponse>;
    /**
     * API to verify Possession and Non-Attachment Certificate.
    **/
    Pncer(req: operations.PncerRequest, config?: AxiosRequestConfig): Promise<operations.PncerResponse>;
    /**
     * API to verify Possession Certificate.
    **/
    Pscer(req: operations.PscerRequest, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * API to verify Relationship Certificate.
    **/
    Rlcer(req: operations.RlcerRequest, config?: AxiosRequestConfig): Promise<operations.RlcerResponse>;
    /**
     * API to verify Residence Certificate.
    **/
    Rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * API to verify Solvency Certificate.
    **/
    Slcer(req: operations.SlcerRequest, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
    /**
     * API to verify Valuation Certificate.
    **/
    Vlcer(req: operations.VlcerRequest, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
    /**
     * API to verify Widow-Widower Certificate.
    **/
    Wwcer(req: operations.WwcerRequest, config?: AxiosRequestConfig): Promise<operations.WwcerResponse>;
}
export {};
