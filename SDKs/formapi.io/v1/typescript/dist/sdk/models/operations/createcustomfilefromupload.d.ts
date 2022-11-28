import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomFileFromUploadCreateCustomFileData extends SpeakeasyBase {
    cacheId: string;
}
export declare class CreateCustomFileFromUploadSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class CreateCustomFileFromUploadCreateCustomFileResponseCustomFile extends SpeakeasyBase {
    id: string;
    url: string;
}
export declare enum CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateCustomFileFromUploadCreateCustomFileResponse extends SpeakeasyBase {
    customFile: CreateCustomFileFromUploadCreateCustomFileResponseCustomFile;
    errors?: string[];
    status: CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum;
}
export declare class CreateCustomFileFromUploadRequest extends SpeakeasyBase {
    request: CreateCustomFileFromUploadCreateCustomFileData;
    security: CreateCustomFileFromUploadSecurity;
}
export declare class CreateCustomFileFromUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createCustomFileResponse?: CreateCustomFileFromUploadCreateCustomFileResponse;
}
