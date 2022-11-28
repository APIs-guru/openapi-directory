import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestS3TagListHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestS3TagListRequest extends SpeakeasyBase {
    headers: RequestS3TagListHeaders;
}
export declare class RequestS3TagListResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3TagList?: shared.S3TagList;
    statusCode: number;
}
