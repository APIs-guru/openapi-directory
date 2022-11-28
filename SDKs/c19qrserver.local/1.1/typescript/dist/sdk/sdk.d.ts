import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AttendeesSignins } from "./attendeessignins";
import { Authentication } from "./authentication";
import { Passwords } from "./passwords";
import { TeamMembers } from "./teammembers";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://c19qrserver.local", "https://virtserver.swaggerhub.com/aijaz/QRCodeSigninServer/1.1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    attendeesSignins: AttendeesSignins;
    authentication: Authentication;
    passwords: Passwords;
    teamMembers: TeamMembers;
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
