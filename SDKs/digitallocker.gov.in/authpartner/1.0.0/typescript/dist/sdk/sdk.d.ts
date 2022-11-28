import { AxiosInstance } from "axios";
import { AccountDetailApi } from "./accountdetailapi";
import { Authorization } from "./authorization";
import { AuthorizationApi } from "./authorizationapi";
import { DigiLockerMetaApIs } from "./digilockermetaapis";
import { DigiLockerSignUpApIs } from "./digilockersignupapis";
import { FileApIs } from "./fileapis";
import { TokenRevocationApi } from "./tokenrevocationapi";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://betaapi.digitallocker.gov.in/public"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accountDetailApi: AccountDetailApi;
    authorization: Authorization;
    authorizationApi: AuthorizationApi;
    digiLockerMetaApIs: DigiLockerMetaApIs;
    digiLockerSignUpApIs: DigiLockerSignUpApIs;
    fileApIs: FileApIs;
    tokenRevocationApi: TokenRevocationApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
