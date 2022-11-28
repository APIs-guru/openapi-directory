import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUploadTokensUploadTokenPathParams extends SpeakeasyBase {
    uploadToken: string;
}
export declare class DeleteUploadTokensUploadTokenSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteUploadTokensUploadTokenRequest extends SpeakeasyBase {
    pathParams: DeleteUploadTokensUploadTokenPathParams;
    security: DeleteUploadTokensUploadTokenSecurity;
}
export declare class DeleteUploadTokensUploadTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
