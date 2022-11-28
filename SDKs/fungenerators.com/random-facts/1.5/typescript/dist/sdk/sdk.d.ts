import { AxiosInstance } from "axios";
import { FactOfTheDay } from "./factoftheday";
import { NumberFacts } from "./numberfacts";
import { OnThisDay } from "./onthisday";
import { PrivateFacts } from "./privatefacts";
import { RandomFacts } from "./randomfacts";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.fungenerators.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    factOfTheDay: FactOfTheDay;
    numberFacts: NumberFacts;
    onThisDay: OnThisDay;
    privateFacts: PrivateFacts;
    randomFacts: RandomFacts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
