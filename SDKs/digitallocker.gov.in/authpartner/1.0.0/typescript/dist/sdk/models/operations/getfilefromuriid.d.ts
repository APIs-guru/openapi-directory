import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFileFromUriIdPathParams extends SpeakeasyBase {
    uri: string;
}
export declare class GetFileFromUriIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetFileFromUriId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriIdRequest extends SpeakeasyBase {
    pathParams: GetFileFromUriIdPathParams;
    security: GetFileFromUriIdSecurity;
}
export declare class GetFileFromUriIdResponse extends SpeakeasyBase {
    contentType: string;
    getFileFromUriId200ApplicationPdfString?: string;
    getFileFromUriId200ImageJpegString?: string;
    getFileFromUriId200ImageJpgString?: string;
    getFileFromUriId200ImagePngString?: string;
    getFileFromUriId400ApplicationJsonObject?: GetFileFromUriId400ApplicationJson;
    getFileFromUriId401ApplicationJsonObject?: GetFileFromUriId401ApplicationJson;
    getFileFromUriId404ApplicationJsonObject?: GetFileFromUriId404ApplicationJson;
    getFileFromUriId500ApplicationJsonOneOf?: any;
    getFileFromUriId503ApplicationJsonOneOf?: any;
    statusCode: number;
}
