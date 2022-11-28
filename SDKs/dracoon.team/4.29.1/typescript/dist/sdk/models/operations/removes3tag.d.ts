import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveS3TagPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RemoveS3TagHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveS3TagRequest extends SpeakeasyBase {
    pathParams: RemoveS3TagPathParams;
    headers: RemoveS3TagHeaders;
}
export declare class RemoveS3TagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
