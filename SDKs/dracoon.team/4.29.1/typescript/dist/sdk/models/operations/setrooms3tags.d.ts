import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetRoomS3TagsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class SetRoomS3TagsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetRoomS3TagsRequest extends SpeakeasyBase {
    pathParams: SetRoomS3TagsPathParams;
    headers: SetRoomS3TagsHeaders;
    request: shared.S3TagIds;
}
export declare class SetRoomS3TagsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3TagList?: shared.S3TagList;
    statusCode: number;
}
