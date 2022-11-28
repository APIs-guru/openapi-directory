import { SpeakeasyBase } from "../../../internal/utils";
export declare class MeteringPostRequestBody extends SpeakeasyBase {
    one80?: number;
    account?: string;
    energy?: number;
    secret?: string;
    value?: number;
    zip?: string;
}
export declare class MeteringPost200ApplicationJson extends SpeakeasyBase {
    one80?: number;
    one81?: number;
    one82?: number;
    processingTime?: number;
    account?: string;
    co2GOekostrom?: number;
    co2GStandard?: number;
    timeStamp?: number;
}
export declare class MeteringPostRequest extends SpeakeasyBase {
    request: MeteringPostRequestBody;
}
export declare class MeteringPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    meteringPost200ApplicationJsonObject?: MeteringPost200ApplicationJson;
}
