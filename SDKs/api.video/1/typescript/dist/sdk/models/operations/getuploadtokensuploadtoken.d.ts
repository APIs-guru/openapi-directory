import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUploadTokensUploadTokenPathParams extends SpeakeasyBase {
    uploadToken: string;
}
export declare class GetUploadTokensUploadTokenSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetUploadTokensUploadTokenRequest extends SpeakeasyBase {
    pathParams: GetUploadTokensUploadTokenPathParams;
    security: GetUploadTokensUploadTokenSecurity;
}
export declare class GetUploadTokensUploadTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    uploadToken?: shared.UploadToken;
}
