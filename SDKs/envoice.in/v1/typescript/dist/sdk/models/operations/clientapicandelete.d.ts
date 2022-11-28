import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClientApiCanDeleteQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class ClientApiCanDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiCanDeleteRequest extends SpeakeasyBase {
    queryParams: ClientApiCanDeleteQueryParams;
    headers: ClientApiCanDeleteHeaders;
}
export declare class ClientApiCanDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    clientApiCanDelete200ApplicationJsonBoolean?: boolean;
    clientApiCanDelete200TextJsonBoolean?: boolean;
    contentType: string;
    statusCode: number;
}
