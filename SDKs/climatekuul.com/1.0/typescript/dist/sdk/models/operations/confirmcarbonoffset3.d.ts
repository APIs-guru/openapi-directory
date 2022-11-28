import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmCarbonOffset3ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset3RequestBody extends SpeakeasyBase {
    carbonOffset: string;
    contactEmail?: string;
    contactFirstName?: string;
    contactLastName?: string;
    transactionId: string;
}
export declare class ConfirmCarbonOffset3Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmCarbonOffset3RequestBody;
}
export declare class ConfirmCarbonOffset3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
