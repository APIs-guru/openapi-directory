import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictkerala/v3"];
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
     * cmcer - Community Certificate
     *
     * API to verify Community Certificate.
    **/
    cmcer(req: operations.CmcerRequest, config?: AxiosRequestConfig): Promise<operations.CmcerResponse>;
    /**
     * cncer - Conversion Certificate
     *
     * API to verify Conversion Certificate.
    **/
    cncer(req: operations.CncerRequest, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * ctcer - Caste Certificate
     *
     * API to verify Caste Certificate.
    **/
    ctcer(req: operations.CtcerRequest, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * dmcer - Domicile Certificate
     *
     * API to verify Domicile Certificate.
    **/
    dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * dpcer - Dependency Certificate
     *
     * API to verify Dependency Certificate.
    **/
    dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * dscer - Destitute Certificate
     *
     * API to verify Destitute Certificate.
    **/
    dscer(req: operations.DscerRequest, config?: AxiosRequestConfig): Promise<operations.DscerResponse>;
    /**
     * fmcer - Family Membership Certificate
     *
     * API to verify Family Membership Certificate.
    **/
    fmcer(req: operations.FmcerRequest, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * idcer - Identification Certificate
     *
     * API to verify Identification Certificate.
    **/
    idcer(req: operations.IdcerRequest, config?: AxiosRequestConfig): Promise<operations.IdcerResponse>;
    /**
     * imcer - Inter-Caste Marriage Certificate
     *
     * API to verify Inter-Caste Marriage Certificate.
    **/
    imcer(req: operations.ImcerRequest, config?: AxiosRequestConfig): Promise<operations.ImcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * lfcer - Life Certificate
     *
     * API to verify Life Certificate.
    **/
    lfcer(req: operations.LfcerRequest, config?: AxiosRequestConfig): Promise<operations.LfcerResponse>;
    /**
     * lhcer - Legal Heir Certificate
     *
     * API to verify Legal Heir Certificate.
    **/
    lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * locer - Location Certificate
     *
     * API to verify Location Certificate.
    **/
    locer(req: operations.LocerRequest, config?: AxiosRequestConfig): Promise<operations.LocerResponse>;
    /**
     * mncer - Minority Certificate
     *
     * API to verify Minority Certificate.
    **/
    mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * nrcer - Non-Remarriage Certificate
     *
     * API to verify Non-Remarriage Certificate.
    **/
    nrcer(req: operations.NrcerRequest, config?: AxiosRequestConfig): Promise<operations.NrcerResponse>;
    /**
     * ntcer - Nativity Certificate
     *
     * API to verify Nativity Certificate.
    **/
    ntcer(req: operations.NtcerRequest, config?: AxiosRequestConfig): Promise<operations.NtcerResponse>;
    /**
     * oscer - One and the Same Certificate
     *
     * API to verify One and the Same Certificate.
    **/
    oscer(req: operations.OscerRequest, config?: AxiosRequestConfig): Promise<operations.OscerResponse>;
    /**
     * pncer - Possession and Non-Attachment Certificate
     *
     * API to verify Possession and Non-Attachment Certificate.
    **/
    pncer(req: operations.PncerRequest, config?: AxiosRequestConfig): Promise<operations.PncerResponse>;
    /**
     * pscer - Possession Certificate
     *
     * API to verify Possession Certificate.
    **/
    pscer(req: operations.PscerRequest, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * rlcer - Relationship Certificate
     *
     * API to verify Relationship Certificate.
    **/
    rlcer(req: operations.RlcerRequest, config?: AxiosRequestConfig): Promise<operations.RlcerResponse>;
    /**
     * rscer - Residence Certificate
     *
     * API to verify Residence Certificate.
    **/
    rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * slcer - Solvency Certificate
     *
     * API to verify Solvency Certificate.
    **/
    slcer(req: operations.SlcerRequest, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
    /**
     * vlcer - Valuation Certificate
     *
     * API to verify Valuation Certificate.
    **/
    vlcer(req: operations.VlcerRequest, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
    /**
     * wwcer - Widow-Widower Certificate
     *
     * API to verify Widow-Widower Certificate.
    **/
    wwcer(req: operations.WwcerRequest, config?: AxiosRequestConfig): Promise<operations.WwcerResponse>;
}
export {};
