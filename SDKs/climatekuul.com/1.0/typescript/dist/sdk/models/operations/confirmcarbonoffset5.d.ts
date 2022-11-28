import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmCarbonOffset5ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset5RequestBody extends SpeakeasyBase {
    carbonOffset: string;
    contactEmail?: string;
    contactFirstName?: string;
    contactLastName?: string;
    transactionId: string;
}
export declare class ConfirmCarbonOffset5Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmCarbonOffset5RequestBody;
}
export declare class ConfirmCarbonOffset5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
