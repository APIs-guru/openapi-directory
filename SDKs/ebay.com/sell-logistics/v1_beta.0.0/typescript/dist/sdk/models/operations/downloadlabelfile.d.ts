import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadLabelFilePathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class DownloadLabelFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DownloadLabelFileRequest extends SpeakeasyBase {
    pathParams: DownloadLabelFilePathParams;
    security: DownloadLabelFileSecurity;
}
export declare class DownloadLabelFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
