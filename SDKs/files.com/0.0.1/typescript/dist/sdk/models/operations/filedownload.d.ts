import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileDownloadPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileDownloadQueryParams extends SpeakeasyBase {
    action?: string;
    previewSize?: string;
    withPreviews?: boolean;
    withPriorityColor?: boolean;
}
export declare class FileDownloadRequest extends SpeakeasyBase {
    pathParams: FileDownloadPathParams;
    queryParams: FileDownloadQueryParams;
}
export declare class FileDownloadResponse extends SpeakeasyBase {
    contentType: string;
    fileEntity?: shared.FileEntity;
    statusCode: number;
}
