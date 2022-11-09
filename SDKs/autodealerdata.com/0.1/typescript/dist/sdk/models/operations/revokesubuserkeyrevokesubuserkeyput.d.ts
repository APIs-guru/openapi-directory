import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams extends SpeakeasyBase {
    apiId: string;
    apiKey: string;
    subUserKeyUuid: string;
}
export declare class RevokeSubUserKeyRevokeSubUserKeyPutRequest extends SpeakeasyBase {
    queryParams: RevokeSubUserKeyRevokeSubUserKeyPutQueryParams;
}
export declare class RevokeSubUserKeyRevokeSubUserKeyPutResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
