import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomS3TagsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomS3TagsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoomS3TagsRequest extends SpeakeasyBase {
    pathParams: RequestRoomS3TagsPathParams;
    headers: RequestRoomS3TagsHeaders;
}
export declare class RequestRoomS3TagsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3TagList?: shared.S3TagList;
    statusCode: number;
}
