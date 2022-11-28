import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadTokensSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostUploadTokensRequest extends SpeakeasyBase {
    request?: shared.TokenCreatePayload;
    security: PostUploadTokensSecurity;
}
export declare class PostUploadTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    uploadToken?: shared.UploadToken;
}
