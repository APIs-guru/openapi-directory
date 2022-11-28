import { SpeakeasyBase } from "../../../internal/utils";
export declare class MeteringGetQueryParams extends SpeakeasyBase {
    account?: string;
}
export declare class MeteringGet200ApplicationJson extends SpeakeasyBase {
    one80?: number;
    one81?: number;
    one82?: number;
    processingTime?: number;
    account?: string;
    co2GOekostrom?: number;
    co2GStandard?: number;
    credits?: any;
    timeStamp?: number;
    ttl?: number;
}
export declare class MeteringGetRequest extends SpeakeasyBase {
    queryParams: MeteringGetQueryParams;
}
export declare class MeteringGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    meteringGet200ApplicationJsonObject?: MeteringGet200ApplicationJson;
}
