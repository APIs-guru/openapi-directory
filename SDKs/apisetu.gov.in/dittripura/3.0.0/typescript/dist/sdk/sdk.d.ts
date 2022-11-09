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
     * API to verify Character Certificate.
    **/
    Chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * API to verify Distance Certificate.
    **/
    Dncer(req: operations.DncerRequest, config?: AxiosRequestConfig): Promise<operations.DncerResponse>;
    /**
     * API to verify Dependency Certificate.
    **/
    Dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * API to verify Food Stuff License.
    **/
    Fslcs(req: operations.FslcsRequest, config?: AxiosRequestConfig): Promise<operations.FslcsResponse>;
    /**
     * API to verify Grievance Redressal/ Registration.
    **/
    Grred(req: operations.GrredRequest, config?: AxiosRequestConfig): Promise<operations.GrredResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Issue of Arm Licence.
    **/
    Isoal(req: operations.IsoalRequest, config?: AxiosRequestConfig): Promise<operations.IsoalResponse>;
    /**
     * API to verify Land Valuation/ Holding/ Record Certificate.
    **/
    Lvcer(req: operations.LvcerRequest, config?: AxiosRequestConfig): Promise<operations.LvcerResponse>;
    /**
     * API to verify Manufacturer License.
    **/
    Malcs(req: operations.MalcsRequest, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * API to verify Small Savings Agent License.
    **/
    Mpkby(req: operations.MpkbyRequest, config?: AxiosRequestConfig): Promise<operations.MpkbyResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Right to Information.
    **/
    Ritin(req: operations.RitinRequest, config?: AxiosRequestConfig): Promise<operations.RitinResponse>;
    /**
     * API to verify Marriage Certificate.
    **/
    Rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * API to verify Residence Certificate.
    **/
    Rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * API to verify SC/ST  Certificate.
    **/
    Shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * API to verify Surviving Member Certificate.
    **/
    Smcer(req: operations.SmcerRequest, config?: AxiosRequestConfig): Promise<operations.SmcerResponse>;
    /**
     * API to verify Standardized Agency Systems (SAS) Agent License.
    **/
    Sslcs(req: operations.SslcsRequest, config?: AxiosRequestConfig): Promise<operations.SslcsResponse>;
    /**
     * API to verify License/ Verification of Weights, Measures and Instruments.
    **/
    Vrwmi(req: operations.VrwmiRequest, config?: AxiosRequestConfig): Promise<operations.VrwmiResponse>;
}
export {};
