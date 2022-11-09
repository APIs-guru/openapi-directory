import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Create applicant
    **/
    ApplicantsAdd(req: operations.ApplicantsAddRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsAddResponse>;
    /**
     * List applicants
    **/
    ApplicantsAll(req: operations.ApplicantsAllRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsAllResponse>;
    /**
     * Get applicant
    **/
    ApplicantsOne(req: operations.ApplicantsOneRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsOneResponse>;
    /**
     * List Jobs
    **/
    JobsAll(req: operations.JobsAllRequest, config?: AxiosRequestConfig): Promise<operations.JobsAllResponse>;
    /**
     * Get Job
    **/
    JobsOne(req: operations.JobsOneRequest, config?: AxiosRequestConfig): Promise<operations.JobsOneResponse>;
}
export {};
