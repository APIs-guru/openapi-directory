import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSearchV1FieldsQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetSearchV1FieldsRequest extends SpeakeasyBase {
    queryParams: GetSearchV1FieldsQueryParams;
}
export declare class GetSearchV1FieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fields?: string[];
    statusCode: number;
}
