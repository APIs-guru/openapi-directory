import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/dittripura/v3"];
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
     * chcer - Character Certificate
     *
     * API to verify Character Certificate.
    **/
    chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * dncer - Distance Certificate
     *
     * API to verify Distance Certificate.
    **/
    dncer(req: operations.DncerRequest, config?: AxiosRequestConfig): Promise<operations.DncerResponse>;
    /**
     * dpcer - Dependency Certificate
     *
     * API to verify Dependency Certificate.
    **/
    dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * fslcs - Food Stuff License
     *
     * API to verify Food Stuff License.
    **/
    fslcs(req: operations.FslcsRequest, config?: AxiosRequestConfig): Promise<operations.FslcsResponse>;
    /**
     * grred - Grievance Redressal/ Registration
     *
     * API to verify Grievance Redressal/ Registration.
    **/
    grred(req: operations.GrredRequest, config?: AxiosRequestConfig): Promise<operations.GrredResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * isoal - Issue of Arm Licence
     *
     * API to verify Issue of Arm Licence.
    **/
    isoal(req: operations.IsoalRequest, config?: AxiosRequestConfig): Promise<operations.IsoalResponse>;
    /**
     * lvcer - Land Valuation/ Holding/ Record Certificate
     *
     * API to verify Land Valuation/ Holding/ Record Certificate.
    **/
    lvcer(req: operations.LvcerRequest, config?: AxiosRequestConfig): Promise<operations.LvcerResponse>;
    /**
     * malcs - Manufacturer License
     *
     * API to verify Manufacturer License.
    **/
    malcs(req: operations.MalcsRequest, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * mpkby - Small Savings Agent License
     *
     * API to verify Small Savings Agent License.
    **/
    mpkby(req: operations.MpkbyRequest, config?: AxiosRequestConfig): Promise<operations.MpkbyResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * ritin - Right to Information
     *
     * API to verify Right to Information.
    **/
    ritin(req: operations.RitinRequest, config?: AxiosRequestConfig): Promise<operations.RitinResponse>;
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
     * shcer - SC/ST  Certificate
     *
     * API to verify SC/ST  Certificate.
    **/
    shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * smcer - Surviving Member Certificate
     *
     * API to verify Surviving Member Certificate.
    **/
    smcer(req: operations.SmcerRequest, config?: AxiosRequestConfig): Promise<operations.SmcerResponse>;
    /**
     * sslcs - Standardized Agency Systems (SAS) Agent License
     *
     * API to verify Standardized Agency Systems (SAS) Agent License.
    **/
    sslcs(req: operations.SslcsRequest, config?: AxiosRequestConfig): Promise<operations.SslcsResponse>;
    /**
     * vrwmi - License/ Verification of Weights, Measures and Instruments
     *
     * API to verify License/ Verification of Weights, Measures and Instruments.
    **/
    vrwmi(req: operations.VrwmiRequest, config?: AxiosRequestConfig): Promise<operations.VrwmiResponse>;
}
export {};
