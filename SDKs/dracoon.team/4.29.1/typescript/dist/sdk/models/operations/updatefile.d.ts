import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFilePathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class UpdateFileHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateFileRequest extends SpeakeasyBase {
    pathParams: UpdateFilePathParams;
    headers: UpdateFileHeaders;
    request: shared.UpdateFileRequest;
}
export declare class UpdateFileResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
