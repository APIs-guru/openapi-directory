import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetLookupPathParams extends SpeakeasyBase {
    md5: string;
}
export declare class GetLookupRequest extends SpeakeasyBase {
    pathParams: GetLookupPathParams;
}
export declare class GetLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
