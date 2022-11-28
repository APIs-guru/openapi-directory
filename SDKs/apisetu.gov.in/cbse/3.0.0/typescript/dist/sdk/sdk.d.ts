import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/cbse/v3"];
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
     * hpcer - Class XII Passing Certificate
     *
     * API to verify Class XII Passing Certificate.
    **/
    hpcer(req: operations.HpcerRequest, config?: AxiosRequestConfig): Promise<operations.HpcerResponse>;
    /**
     * hscer - Class XII Marksheet
     *
     * API to verify Class XII Marksheet.
    **/
    hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * hsmgr - Class XII Migration Certificate
     *
     * API to verify Class XII Migration Certificate.
    **/
    hsmgr(req: operations.HsmgrRequest, config?: AxiosRequestConfig): Promise<operations.HsmgrResponse>;
    /**
     * nchsc - NCHMCT Skill Certificate (X)
     *
     * API to verify NCHMCT Skill Certificate (X).
    **/
    nchsc(req: operations.NchscRequest, config?: AxiosRequestConfig): Promise<operations.NchscResponse>;
    /**
     * nctsc - NCHMCT Skill Certificate (XII)
     *
     * API to verify NCHMCT Skill Certificate (XII).
    **/
    nctsc(req: operations.NctscRequest, config?: AxiosRequestConfig): Promise<operations.NctscResponse>;
    /**
     * nsesc - NSE Skill Certificate (X)
     *
     * API to verify NSE Skill Certificate (X).
    **/
    nsesc(req: operations.NsescRequest, config?: AxiosRequestConfig): Promise<operations.NsescResponse>;
    /**
     * nstsc - NSE Skill Certificate (XII)
     *
     * API to verify NSE Skill Certificate (XII).
    **/
    nstsc(req: operations.NstscRequest, config?: AxiosRequestConfig): Promise<operations.NstscResponse>;
    /**
     * ntltr - NEET Rank Letter
     *
     * API to verify NEET Rank Letter.
    **/
    ntltr(req: operations.NtltrRequest, config?: AxiosRequestConfig): Promise<operations.NtltrResponse>;
    /**
     * ntmks - NEET Marksheet
     *
     * API to verify NEET Marksheet.
    **/
    ntmks(req: operations.NtmksRequest, config?: AxiosRequestConfig): Promise<operations.NtmksResponse>;
    /**
     * skhsc - Skill Certificate (X)
     *
     * API to verify Skill Certificate (X).
    **/
    skhsc(req: operations.SkhscRequest, config?: AxiosRequestConfig): Promise<operations.SkhscResponse>;
    /**
     * sktsc - Skill Certificate (XII)
     *
     * API to verify Skill Certificate (XII).
    **/
    sktsc(req: operations.SktscRequest, config?: AxiosRequestConfig): Promise<operations.SktscResponse>;
    /**
     * spcer - Class X Passing Certificate
     *
     * API to verify Class X Passing Certificate.
    **/
    spcer(req: operations.SpcerRequest, config?: AxiosRequestConfig): Promise<operations.SpcerResponse>;
    /**
     * sscer - Class X Marksheet
     *
     * API to verify Class X Marksheet.
    **/
    sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
    /**
     * ssmgr - Class X Migration Certificate
     *
     * API to verify Class X Migration Certificate.
    **/
    ssmgr(req: operations.SsmgrRequest, config?: AxiosRequestConfig): Promise<operations.SsmgrResponse>;
    /**
     * tetcr - Teachers Eligibility Test Certificate
     *
     * API to verify Teachers Eligibility Test Certificate.
    **/
    tetcr(req: operations.TetcrRequest, config?: AxiosRequestConfig): Promise<operations.TetcrResponse>;
    /**
     * tetms - Teachers Eligibility Test Mark Sheet
     *
     * API to verify Teachers Eligibility Test Mark Sheet.
    **/
    tetms(req: operations.TetmsRequest, config?: AxiosRequestConfig): Promise<operations.TetmsResponse>;
}
export {};
