import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordsRecordIdJsonPathParams extends SpeakeasyBase {
    recordId: number;
}
export declare enum GetRecordsRecordIdJsonFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetRecordsRecordIdJsonQueryParams extends SpeakeasyBase {
    apiKey: string;
    fields?: string;
    format: GetRecordsRecordIdJsonFormatEnum;
}
export declare class GetRecordsRecordIdJsonRequest extends SpeakeasyBase {
    pathParams: GetRecordsRecordIdJsonPathParams;
    queryParams: GetRecordsRecordIdJsonQueryParams;
}
export declare class GetRecordsRecordIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getRecordsRecordIdJson403ApplicationJsonObject?: Map<string, any>;
    getRecordsRecordIdJson404ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
    record?: shared.Record;
}
