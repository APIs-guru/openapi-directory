import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReserveRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
    driver?: string;
    endDate?: string;
    token?: string;
}
export declare class Reserve201ApplicationJson extends SpeakeasyBase {
    command?: Map<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class ReserveRequest extends SpeakeasyBase {
    request: ReserveRequestBody;
}
export declare class ReserveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reserve201ApplicationJsonObject?: Reserve201ApplicationJson;
}
