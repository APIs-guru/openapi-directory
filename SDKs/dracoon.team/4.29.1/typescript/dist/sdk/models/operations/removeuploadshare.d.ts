import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUploadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RemoveUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveUploadShareRequest extends SpeakeasyBase {
    pathParams: RemoveUploadSharePathParams;
    headers: RemoveUploadShareHeaders;
}
export declare class RemoveUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
