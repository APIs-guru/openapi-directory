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
    GetBarcodeDecodeTypes(req: operations.GetBarcodeDecodeTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeDecodeTypesResponse>;
    GetBarcodeEncode(req: operations.GetBarcodeEncodeRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeEncodeResponse>;
    GetBarcodeEncodeTypes(req: operations.GetBarcodeEncodeTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeEncodeTypesResponse>;
    PostBarcodeDecode(req: operations.PostBarcodeDecodeRequest, config?: AxiosRequestConfig): Promise<operations.PostBarcodeDecodeResponse>;
}
export {};
