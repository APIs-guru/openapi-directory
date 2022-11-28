import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://Your API URL"];
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
     * pullDoc - Pull Doc Request API.
     *
     * The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata
    **/
    pullDoc(req: operations.PullDocRequest, config?: AxiosRequestConfig): Promise<operations.PullDocResponse>;
    /**
     * pullUri - Pull URI Request API .
     *
     * The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.
    **/
    pullUri(req: operations.PullUriRequest, config?: AxiosRequestConfig): Promise<operations.PullUriResponse>;
}
export {};
