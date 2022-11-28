import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubUserKeysGetSubUserKeysGetQueryParams extends SpeakeasyBase {
    apiId: string;
    apiKey: string;
}
export declare class GetSubUserKeysGetSubUserKeysGetRequest extends SpeakeasyBase {
    queryParams: GetSubUserKeysGetSubUserKeysGetQueryParams;
}
export declare class GetSubUserKeysGetSubUserKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
