import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendClientsMessageUsingGetQueryParams extends SpeakeasyBase {
    msg?: string;
    padId?: string;
}
export declare class SendClientsMessageUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGetRequest extends SpeakeasyBase {
    queryParams: SendClientsMessageUsingGetQueryParams;
}
export declare class SendClientsMessageUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendClientsMessageUsingGet200ApplicationJsonObject?: SendClientsMessageUsingGet200ApplicationJson;
    sendClientsMessageUsingGet400ApplicationJsonObject?: SendClientsMessageUsingGet400ApplicationJson;
    sendClientsMessageUsingGet401ApplicationJsonObject?: SendClientsMessageUsingGet401ApplicationJson;
    sendClientsMessageUsingGet500ApplicationJsonObject?: SendClientsMessageUsingGet500ApplicationJson;
}
