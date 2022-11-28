import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class PostUploadHeaders extends SpeakeasyBase {
    contentRange?: string;
}
export declare class PostUploadRequest extends SpeakeasyBase {
    queryParams: PostUploadQueryParams;
    headers: PostUploadHeaders;
    request?: shared.TokenUploadPayload;
}
export declare class PostUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    video?: shared.Video;
}
