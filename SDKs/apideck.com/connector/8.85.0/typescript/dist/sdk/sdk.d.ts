import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ApiResources } from "./apiresources";
import { ApIs } from "./apis";
import { ConnectorDocs } from "./connectordocs";
import { ConnectorResources } from "./connectorresources";
import { Connectors } from "./connectors";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://unify.apideck.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    apiResources: ApiResources;
    apIs: ApIs;
    connectorDocs: ConnectorDocs;
    connectorResources: ConnectorResources;
    connectors: Connectors;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
