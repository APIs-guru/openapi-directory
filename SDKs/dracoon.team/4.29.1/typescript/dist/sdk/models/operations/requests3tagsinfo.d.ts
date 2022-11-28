import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestS3TagsInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestS3TagsInfoRequest extends SpeakeasyBase {
    headers: RequestS3TagsInfoHeaders;
}
export declare class RequestS3TagsInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3TagList?: shared.S3TagList;
    statusCode: number;
}
