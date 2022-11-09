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
     * API to verify Class XII Passing Certificate.
    **/
    Hpcer(req: operations.HpcerRequest, config?: AxiosRequestConfig): Promise<operations.HpcerResponse>;
    /**
     * API to verify Class XII Marksheet.
    **/
    Hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * API to verify Class XII Migration Certificate.
    **/
    Hsmgr(req: operations.HsmgrRequest, config?: AxiosRequestConfig): Promise<operations.HsmgrResponse>;
    /**
     * API to verify NCHMCT Skill Certificate (X).
    **/
    Nchsc(req: operations.NchscRequest, config?: AxiosRequestConfig): Promise<operations.NchscResponse>;
    /**
     * API to verify NCHMCT Skill Certificate (XII).
    **/
    Nctsc(req: operations.NctscRequest, config?: AxiosRequestConfig): Promise<operations.NctscResponse>;
    /**
     * API to verify NSE Skill Certificate (X).
    **/
    Nsesc(req: operations.NsescRequest, config?: AxiosRequestConfig): Promise<operations.NsescResponse>;
    /**
     * API to verify NSE Skill Certificate (XII).
    **/
    Nstsc(req: operations.NstscRequest, config?: AxiosRequestConfig): Promise<operations.NstscResponse>;
    /**
     * API to verify NEET Rank Letter.
    **/
    Ntltr(req: operations.NtltrRequest, config?: AxiosRequestConfig): Promise<operations.NtltrResponse>;
    /**
     * API to verify NEET Marksheet.
    **/
    Ntmks(req: operations.NtmksRequest, config?: AxiosRequestConfig): Promise<operations.NtmksResponse>;
    /**
     * API to verify Skill Certificate (X).
    **/
    Skhsc(req: operations.SkhscRequest, config?: AxiosRequestConfig): Promise<operations.SkhscResponse>;
    /**
     * API to verify Skill Certificate (XII).
    **/
    Sktsc(req: operations.SktscRequest, config?: AxiosRequestConfig): Promise<operations.SktscResponse>;
    /**
     * API to verify Class X Passing Certificate.
    **/
    Spcer(req: operations.SpcerRequest, config?: AxiosRequestConfig): Promise<operations.SpcerResponse>;
    /**
     * API to verify Class X Marksheet.
    **/
    Sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
    /**
     * API to verify Class X Migration Certificate.
    **/
    Ssmgr(req: operations.SsmgrRequest, config?: AxiosRequestConfig): Promise<operations.SsmgrResponse>;
    /**
     * API to verify Teachers Eligibility Test Certificate.
    **/
    Tetcr(req: operations.TetcrRequest, config?: AxiosRequestConfig): Promise<operations.TetcrResponse>;
    /**
     * API to verify Teachers Eligibility Test Mark Sheet.
    **/
    Tetms(req: operations.TetmsRequest, config?: AxiosRequestConfig): Promise<operations.TetmsResponse>;
}
export {};
