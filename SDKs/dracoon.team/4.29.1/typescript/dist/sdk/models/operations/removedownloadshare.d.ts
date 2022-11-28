import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveDownloadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RemoveDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveDownloadShareRequest extends SpeakeasyBase {
    pathParams: RemoveDownloadSharePathParams;
    headers: RemoveDownloadShareHeaders;
}
export declare class RemoveDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
