import { AxiosInstance } from "axios";
import { DocumentClassification } from "./documentclassification";
import { InformationRetrieval } from "./informationretrieval";
import { Metrics } from "./metrics";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.datumbox.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    documentClassification: DocumentClassification;
    informationRetrieval: InformationRetrieval;
    metrics: Metrics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
