import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmCarbonOffset4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset4RequestBody extends SpeakeasyBase {
    carbonOffset: string;
    contactEmail?: string;
    contactFirstName?: string;
    contactLastName?: string;
    transactionId: string;
}
export declare class ConfirmCarbonOffset4Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmCarbonOffset4RequestBody;
}
export declare class ConfirmCarbonOffset4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
