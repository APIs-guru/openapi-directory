import { SpeakeasyBase } from "../../../internal/utils";
export declare const RequestApiKeyServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class RequestApiKeyRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    email: string;
    password: number;
    userFirstName: string;
    userLastName: string;
}
export declare class RequestApiKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: RequestApiKeyRequestBody;
}
export declare class RequestApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
