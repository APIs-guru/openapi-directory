import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemotestartRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
    driver?: string;
    token?: string;
}
export declare class Remotestart201ApplicationJson extends SpeakeasyBase {
    command?: Map<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class RemotestartRequest extends SpeakeasyBase {
    request: RemotestartRequestBody;
}
export declare class RemotestartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    remotestart201ApplicationJsonObject?: Remotestart201ApplicationJson;
}
