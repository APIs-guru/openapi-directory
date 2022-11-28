import { SpeakeasyBase } from "../../../internal/utils";
export declare class EchoQueryParams extends SpeakeasyBase {
    apiKey: string;
    echo?: string;
}
export declare class Echo200ApplicationJsonEcho extends SpeakeasyBase {
    content?: string;
}
export declare class Echo200ApplicationJson extends SpeakeasyBase {
    echo?: Echo200ApplicationJsonEcho;
}
export declare class EchoRequest extends SpeakeasyBase {
    queryParams: EchoQueryParams;
}
export declare class EchoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    echo200ApplicationJsonObject?: Echo200ApplicationJson;
}
