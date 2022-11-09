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
    GetCharityOrg(req: operations.GetCharityOrgRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgResponse>;
    GetCharityOrgByLegacyId(req: operations.GetCharityOrgByLegacyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgByLegacyIdResponse>;
    GetCharityOrgs(req: operations.GetCharityOrgsRequest, config?: AxiosRequestConfig): Promise<operations.GetCharityOrgsResponse>;
}
export {};
