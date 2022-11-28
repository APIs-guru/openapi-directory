import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmCarbonOffsetServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffsetRequestBody extends SpeakeasyBase {
    carbonOffset: string;
    contactEmail?: string;
    contactFirstName?: string;
    contactLastName?: string;
    transactionId: string;
}
export declare class ConfirmCarbonOffsetRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmCarbonOffsetRequestBody;
}
export declare class ConfirmCarbonOffsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
