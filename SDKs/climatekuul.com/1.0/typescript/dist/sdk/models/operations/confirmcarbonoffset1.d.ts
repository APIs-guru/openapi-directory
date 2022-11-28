import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmCarbonOffset1ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset1RequestBody extends SpeakeasyBase {
    carbonOffset: string;
    contactEmail?: string;
    contactFirstName?: string;
    contactLastName?: string;
    transactionId: string;
}
export declare class ConfirmCarbonOffset1Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmCarbonOffset1RequestBody;
}
export declare class ConfirmCarbonOffset1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
