import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendClientsMessageUsingPostQueryParams extends SpeakeasyBase {
    msg?: string;
    padId?: string;
}
export declare class SendClientsMessageUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPostRequest extends SpeakeasyBase {
    queryParams: SendClientsMessageUsingPostQueryParams;
}
export declare class SendClientsMessageUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendClientsMessageUsingPost200ApplicationJsonObject?: SendClientsMessageUsingPost200ApplicationJson;
    sendClientsMessageUsingPost400ApplicationJsonObject?: SendClientsMessageUsingPost400ApplicationJson;
    sendClientsMessageUsingPost401ApplicationJsonObject?: SendClientsMessageUsingPost401ApplicationJson;
    sendClientsMessageUsingPost500ApplicationJsonObject?: SendClientsMessageUsingPost500ApplicationJson;
}
