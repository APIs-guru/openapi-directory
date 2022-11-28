import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetKeyQueryParams extends SpeakeasyBase {
    token?: string;
}
export declare class GetKeyRequest extends SpeakeasyBase {
    queryParams: GetKeyQueryParams;
}
export declare class GetKeyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
